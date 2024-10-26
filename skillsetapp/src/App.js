import React from 'react';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Signup from './Login&Signup/signup';
import Login from './Login&Signup/login';
import './App.css';


import './App.css';

function App() {
  let Component;
  switch (window.location.pathname.toLowerCase()) {
    case "/":
      Component = <Home />;
      break;

    case "/login":
      Component = <Login /> 
      break;

    case "/signup":
      Component = <Signup /> 
      break;

    default:
      Component = <Home />;  // You can also create a 404 component for better user experience
  }

  return (
    <>
      <Navbar />
      <div className='container'>
         {Component}
      </div>
     
    </>
  );
}

export default App;