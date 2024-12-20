import React from 'react';
import './Home.css';
import Footer from '../Footer/Footer';

function Home() {
  const handleJoinNowClick = () => {
    // Navigate to the login page
    window.location.href = '/login'; // Change '/login' to your desired URL
  };

  return (
    <>
      <div className="banner">
        <h1>GET EQUIPPED WITH THE SKILLSETGO</h1>
        <br />
        <p>
          SkillSetGo equips you with in-demand skills for today’s job market, bridging education and industry needs. Gain hands-on experience, practical knowledge, and connect with a supportive community. Prepare for real-world challenges and turn your career goals into achievements with SkillSetGo.
        </p>
      </div>

      <br /><br /><br /><br /><br /><br />

      <div className="container">
        <div className="cards">
          <div className="card">
            <img alt="People raising hands in a meeting" height="200" src="https://storage.googleapis.com/a1aa/image/KQTTvMz3J24DFVfrZlWNTkt4bD1Lz7lRrXgNoTAHqwuPVX1JA.jpg" width="300" />
            <div className="card-content">
              <i className="fas fa-user-tie"></i>
              <h3>Management &amp; Leadership</h3>
            </div>
          </div>
          <div className="card">
            <img alt="Person holding a tablet in an office" height="200" src="https://storage.googleapis.com/a1aa/image/iL34wRPMmaa2PFnHfwxFU6Obd3EoLZ2b3ixuo0rV34TOVX1JA.jpg" width="300" />
            <div className="card-content">
              <i className="fas fa-user-cog"></i>
              <h3>Project Management</h3>
            </div>
          </div>
          <div className="card">
            <img alt="Person in a suit giving a presentation" height="200" src="https://storage.googleapis.com/a1aa/image/rwTOu6IBaHKKD90MUSu0lKsEN37qjYaGfyxHHS5TO7kOVX1JA.jpg" width="300" />
            <div className="card-content">
              <i className="fas fa-briefcase"></i>
              <h3>Essential Business Skills</h3>
            </div>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className='content-container'>
        <div className='content'>
          <h2>Our Courses</h2>
          <p>Explore a wide range of courses tailored to meet industry demands.</p>
        </div>
        <div className='content'>
          <h2>Community Support</h2>
          <p>Join a network of learners and industry experts ready to guide you.</p>
        </div>
        <div className='content'>
          <h2>Real-World Experience</h2>
          <p>Engage in projects and internships that give you practical skills.</p>
        </div>
      </div>

      <div className="button-container">
        <button className="cta-button" onClick={handleJoinNowClick}>Join Now</button>
        <button className="explore-button">Explore More</button>
      </div>

      <Footer />
    </>
  );
}

export default Home;
