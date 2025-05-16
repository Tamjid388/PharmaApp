import React from 'react'
import '../Auth/Auth.css'
import { Link } from 'react-router'
export const SignIn = () => {
  return (
    <div className="Auth-body ">
      
      <div className="animated-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="particles" id="particles"></div>
    </div>

    <div className="login-container max-w-xl">
        <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Sign in to continue your journey</p>
        </div>

        <form id="loginForm" >
            <div className="form-group">
                <input 
                    type="email" 
                    className="form-input" 
                    id="email" 
                    placeholder="Email address"
                    
                />
                <i className="input-icon fas fa-envelope"></i>
                <span className="error-message" id="emailError"></span>
            </div>

            <div className="form-group">
                <input 
                    type="password" 
                   className="form-input" 
                    id="password" 
                    placeholder="Password"
                   
                />
                <i className="input-icon fas fa-lock"></i>
                <span className="error-message" id="passwordError"></span>
            </div>
          <Link to={'/'}>
              <button type="button" className="submit-button">Sign In</button>
          </Link>
          
        </form>

        <div className="additional-options">
            <a href="#">Forgot password?</a>
        </div>
    </div>
   </div>
  )
}
