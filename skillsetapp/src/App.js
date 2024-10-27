import React from 'react';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Signup from './Login&Signup/signup';
import Login from './Login&Signup/login';
import Skills from './Skills/Skills';
import AdminPage from './Home/AdminPage';
import About from './About/About';
import './App.css';


import './App.css';

function App() {
  let Component;
  switch (window.location.pathname.toLowerCase()) {
    case "/":
      Component = <Skills />;
      break;

    case "/login":
      Component = <Login /> 
      break;

    case "/about":
      Component = <About /> 
      break;

    case "/signup":
      Component = <Signup /> 
      break;
    
    case "/skills":
      Component = <Skills /> 
      break;

    case "/admin":
      Component = <AdminPage /> 
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