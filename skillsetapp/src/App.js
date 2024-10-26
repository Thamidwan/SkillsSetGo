import React from 'react';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
<<<<<<< HEAD
import Login from './Login/Login';

import './App.css';
=======


import './App.css';

>>>>>>> 8acfae8c2fab5ea4ae3455e0ceaf1df3e0a728da
function App() {
  let Component;
  switch (window.location.pathname.toLowerCase()) {
    case "/":
      Component = <Home />;
      break;

    case "/login":
      Component = <Login /> 
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