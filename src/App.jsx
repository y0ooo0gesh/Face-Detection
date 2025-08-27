import { useState } from 'react'
import "./App.css"
import Navigation from '../components/Navigation/Navigation'
import Logo from '../components/Logo/Logo'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import Rank from '../components/Rank/Rank'
import Background from '../components/Background/InteractiveBack'
import SignIn from '../components/SignIn/SignIn'
import RegisterForm from '../components/RegisterForm/RegisterForm'
// import { getFaceData } from './clarifai'

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setbox] = useState({});
  const [route, setroute] = useState("SignIn");
  const [isSignedIn, setisSignedIn] = useState(false);

  const calculateFaceLocation = (data) =>{
    const face = data.outputs?.[0]?.data?.regions?.[0]?.region_info?.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    return{
      leftcol: face.left_col * width,
      toprow: face.top_row * height,
      rightcol: width - (face.right_col * width),
      bottomrow: height - (face.bottom_row * height),
    }
  }
  
  const displayface = (box) =>{
    setbox(box);
  }

  const onInputChange = (event) =>{
    setInput(event.target.value);
  }

  const onButtonSubmit = async () => {
  setImageUrl(input);

  try {
    const response = await fetch("http://localhost:5000/detect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl: input })
    });

  const data = await response.json();

  displayface(calculateFaceLocation(data)); 
  } 
  catch (err) {
      console.error("Error calling backend:", err);
  }
  };

  const onRouteChange=(route)=>{
    if (route === 'SignOut'){
      setisSignedIn(false)
    } 
    else if (route === 'Home'){   
      setisSignedIn(true)
    }
      setroute(route)
  }
  

  return(
    <>
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>            
      <Logo />
        {route === 'Home' 
          ? <div>
              <Rank />
              <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
              <FaceRecognition box={box} imageUrl={imageUrl}/>
            </div>
          : (
            route === 'SignIn'
            ? <SignIn onRouteChange={onRouteChange}/>
            : <RegisterForm onRouteChange={onRouteChange}/>
          ) 
        }
      <Background className="particles" />
    </>
  )

}

export default App
