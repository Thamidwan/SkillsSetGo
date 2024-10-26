import React from 'react'
import './login&Sign.css'


function login(){
  return (
    <div class="container">
   <div class="login-form">
    <h2>
     Login
    </h2>
    <input placeholder="Email or Username" type="text"/>
    <input placeholder="password" type="password"/>
    <button>
     Login
    </button>
    <a href="#">
     Don't have account? Sign up
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

export default login
