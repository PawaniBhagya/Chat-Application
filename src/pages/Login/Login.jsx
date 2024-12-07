import React, { useState} from 'react'
import './Login.css'
import assets from '../../assets/assets'


const Login = () => {

    const [currState,setCurrState] = useState("Sign Up");
  return (
  <div className='Login'>
    <img src={assets.logo_big} alt="" className="logo" />
    <form className="Login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up"?
        <input type="text" placeholder="username" className="form-input" required/> :null}
        <input type="text" placeholder="email address"className="form-input" required/>
        <input type="text" placeholder="password"className="form-input" required/>
        <button type="submit">{currState ==="Sign Up"?"Create account":"Login now"}</button>
        <div className="Login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="Login-forgot">
            {
                currState === "Sign Up"
                ?<p className="Login-toggle">Already have an account <span onClick={()=>setCurrState("Login")}>Login here.</span></p> :
                <p className="Login-toggle">Create an account <span onClick={()=>setCurrState("Sign Up")}>click here.</span></p>
     
            }
            
               </div>
    </form>
  </div>  
  
)
}

export default Login
