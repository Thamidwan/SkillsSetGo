import React from 'react';
import './login&Sign.css';
import Footer from '../Footer/Footer';
function Login() {
  return (
    <>
    <div className="containerrr">
      <div className="login-form">
        <h2>Login</h2>
        <label htmlFor="username">Email or Username</label>
        <input id="username" placeholder="Email or Username" type="text" />
        
        <label htmlFor="password">Password</label>
        <input id="password" placeholder="Password" type="password" />
        
        <button>Login</button>
        Don't have an account?
        <a href='/signup'>
          Sign up
        </a>
      </div>
      
      <div className="divider"></div>
      
      <div className="image-container">
        <img
          alt="Illustration of a job portal with various job categories and a person searching for jobs"
          height="200"
          src="https://storage.googleapis.com/a1aa/image/qWsa9ONIwC7fOaelTKa4qBxh8XYjJoIxf7Ur6JV8H6eEgYqOB.jpg"
          width="200"
        />
      </div>
    </div><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>    <Footer />
    </>
  );
}

export default Login;
