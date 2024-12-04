import React from 'react'
import './Login.css'
import assets from '../../assets/assets'


const Login = () => {
  return (
  <div className='Login'>
    <img src={assets.logo_big} alt="" className="logo" />
    <form className="login-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="username" className="form-input" required/>
        <input type="text" placeholder="email address"className="form-input" />
        <input type="text" placeholder="password"className="form-input" />
        <button type="submit">Sign Up</button>
        <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
            <p className="login-toggle">Already have an account <span></span>click here.</p>
        </div>
    </form>
  </div>  
  
)
}

export default Login
