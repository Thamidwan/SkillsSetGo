import React from 'react'
import './login&Sign.css'

function signup() {
  return (
    <div class="container">
    <div class="signup-form">
     <h2>
      Sign Up
     </h2>
     <input placeholder="Full Name" type="text"/>
     <input placeholder="Email" type="email"/>
     <input placeholder="Password" type="password"/>
     <input placeholder="Confirm Password" type="password"/>
     <button>
      Sign Up
     </button>
     <a href="#">
      Already have an account? Login
     </a>
    </div>
    <div class="divider">
    </div>
    <div class="image-container">
     <img alt="Illustration of a job portal with various job categories and a person searching for jobs" height="200" src="https://storage.googleapis.com/a1aa/image/qWsa9ONIwC7fOaelTKa4qBxh8XYjJoIxf7Ur6JV8H6eEgYqOB.jpg" width="200"/>
    </div>
   </div>
  )
}

export default signup
