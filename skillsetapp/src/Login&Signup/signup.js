import React, { useState } from 'react';
import './login&Sign.css';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Passwords do not match!",
      });
      return;
    }

    const user = {
      full_name: fullName,
      email,
      password,
    };

    try {
<<<<<<< HEAD
      const response = await post('http://localhost/register.php', {
=======
      const response = await fetch('http://localhost/Register/register.php', {
>>>>>>> c8d97959792ccdbbddbff3319cd9d1e06e3748b3
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: data.message,
        });
        // Redirect to login page after successful registration
        setTimeout(() => {
          window.location.href = '/login'; // Adjust path as needed
        }, 2000);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: data.message,
        });
      }
    } catch (error) {
      console.error('Error registering user:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was a problem connecting to the server.',
      });
    }
  };

  return (
    <>
      <div className="containerrr">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          Already have an account?
          <a href="/login">Login</a>
        </div>
        <div className="divider"></div>
        <div className="image-container">
          <img
            alt="Illustration of a job portal"
            height="200"
            src="https://storage.googleapis.com/a1aa/image/qWsa9ONIwC7fOaelTKa4qBxh8XYjJoIxf7Ur6JV8H6eEgYqOB.jpg"
            width="200"
          />
        </div>
      </div>
      <br /><br /><br />
      <Footer />
    </>
  );
}

export default Signup;
