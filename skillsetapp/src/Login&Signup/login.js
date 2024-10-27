import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './login&Sign.css';
import Footer from '../Footer/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccessfulLogin = () => {
    window.location.href = '/about'; // Direct browser navigation
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/Register/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Login successful!',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          // Redirect to about page after successful login
          handleSuccessfulLogin();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.message || 'Invalid credentials',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was a problem connecting to the server',
      });
    }
  };

  return (
    <>
      <div className="containerrr">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <button type="submit">Login</button>
          </form>
          <div className="signup-link">
            Don't have an account?{' '}
            <a href='/signup'>Sign up</a>
          </div>
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
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}

export default Login;