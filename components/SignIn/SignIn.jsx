import {useState} from "react";

const SignIn = ({ onRouteChange , loadUser }) =>{
    const [signInEmail, setsignInEmail] = useState("");
    const [signInPassword, setsignInPassword] = useState("");
    
    const onEmailChange =(event) =>{
        setsignInEmail(event.target.value);
    }
    const onPasswordChange =(event) =>{
        setsignInPassword(event.target.value);
    }
    const onSubmitSignIn = () =>{
        fetch('https://face-recognition-backend-imyf.onrender.com/signin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
        .then(response => response.json())
        .then(data =>{
            if (data.id){
                loadUser(data)
                onRouteChange("Home");
            }
        })
    }

    return(
            <article className="br2 ba dark-gray b--black-10 shadow-2 mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 center ph0 mh0">Sign In</legend>
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
                            onClick={onSubmitSignIn} 
                            className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in"/>
                        </div>
                        <div className="lh-copy center mt3">
                        <p 
                            onClick={()=>onRouteChange("Register")}
                            className="pointer f6 link dim black db">Register up</p>
                        </div>
                    </div>
                </main>
        </article>
    )
}

export default SignIn;