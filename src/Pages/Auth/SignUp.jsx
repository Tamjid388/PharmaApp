import React from 'react'

export const SignUp = () => {
  return (
    <div className='Auth-body'>
      <title>Registration</title>
       <div class="animated-background">
        <div class="gradient-sphere sphere-1"></div>
        <div class="gradient-sphere sphere-2"></div>
        <div class="gradient-sphere sphere-3"></div>
        <div class="particles" id="particles"></div>
    </div>

    <div className="login-container  max-w-xl">
        <div class="login-header">
            <h1>Registration</h1>
            <p>Sign up to continue your journey</p>
        </div>

        <form id="loginForm" >
            <div className="form-group">
                <input 
                    type="email" 
                    className="form-input" 
                    id="email" 
                    placeholder="Email address"
                    required
                />
                <i class="input-icon fas fa-envelope"></i>
                <span className="error-message" id="emailError"></span>
            </div>

            <div class="form-group">
                <input 
                    type="password" 
                   className="form-input" 
                    id="password" 
                    placeholder="Password"
                    required
                />
                <i className="input-icon fas fa-lock"></i>
                <span className="error-message" id="passwordError"></span>
            </div>

            <button type="submit" className="submit-button">Register</button>
        </form>

        <div class="additional-options">
            <a href="#">Forgot password?</a>
            <p style={{ marginTop: "1rem" }}>
                Don't have an account? 
                <a href="#">Sign up</a>
            </p>
        </div>
    </div>
    </div>
  )
}
