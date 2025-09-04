import {useState} from "react";

const RegisterForm = ({ onRouteChange , loadUser }) =>{
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [username, setusername] = useState("");
    
    const onEmailChange =(event) =>{
        setEmail(event.target.value);
    }
    const onPasswordChange =(event) =>{
        setPassword(event.target.value);
    }
    const onNameChange = (event) =>{
        setusername(event.target.value);
    }
    const onSubmitRegister = () =>{
        fetch('https://face-recognition-backend-imyf.onrender.com/register', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: username,
                email: Email,
                password: Password
            })
        })
        .then(response => response.json())
        .then(user =>{
            if (user.id) {
                loadUser(user);
                onRouteChange("Home");
            }
        })
    }

    return(
        <article className="br2 ba dark-gray b--black-10 shadow-2 mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 center ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db lh-copy f6" htmlFor="name">Name</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange={onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db center lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={onPasswordChange}
                            />
                        </div>
                        </fieldset>
                        <div className=" center">
                        <input
                            onClick={onSubmitRegister} 
                            className=" ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Register"/>
                        </div>
                    </div>
                </main>
        </article>
    )
}

export default RegisterForm;