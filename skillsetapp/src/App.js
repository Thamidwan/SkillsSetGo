import React from 'react';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
function App() {
  let Component;
  switch (window.location.pathname.toLowerCase()) {
    case "/":
      Component = <Home />;
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