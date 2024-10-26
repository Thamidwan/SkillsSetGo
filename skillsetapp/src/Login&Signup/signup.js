import React, { useState } from 'react';
import './login&Sign.css';
import Footer from '../Footer/Footer';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for generating unique IDs
import AWS from 'aws-sdk';
import Swal from 'sweetalert2'; // Import SweetAlert

// Configure AWS SDK
AWS.config.update({
  region: 'eu-west-1', // e.g., 'us-west-2'
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

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

    const userId = uuidv4(); // Generate a unique ID for the user
    const user = {
      id: userId, // Unique ID
      fullName,
      email,
      password, // In a real app, ensure to hash the password!
    };

    const params = {
      TableName: 'user_table', // Your DynamoDB table name
      Item: user,
    };

    try {
      await dynamoDB.put(params).promise();
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'User registered successfully!',
      });
      // Optionally redirect to login page
      // window.location.href = '/login';
    } catch (error) {
      console.error('Error registering user:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Error registering user. Please try again.',
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
            alt="Illustration of a job portal with various job categories and a person searching for jobs"
            height="200"
            src="https://storage.googleapis.com/a1aa/image/qWsa9ONIwC7fOaelTKa4qBxh8XYjJoIxf7Ur6JV8H6eEgYqOB.jpg"
            width="200"
          />
        </div>
      </div>
      <br /><br />
      <Footer />
    </>
  );
}

export default Signup;
