import React from 'react'
import './About.css'
import Footer from '../Footer/Footer'
import image from './Skillset_Logo.png'

function About() {
  return (
    <div>
      <div className="about-container">
      <h1>About Our Job and Skill Portal</h1>
      <img 
        src={image}
        alt="Job seekers" 
        className="about-image"
      />
      <p>
        Welcome to our Job and Skill Portal! Our mission is to connect job seekers with
        opportunities that match their skills and aspirations. Whether you are looking to start
        your career, switch jobs, or enhance your skill set, we are here to support you every
        step of the way.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>
          <strong>Diverse Job Listings:</strong> Explore a wide range of job opportunities
          across various industries and locations.
        </li>
        <li>
          <strong>Skill Development:</strong> Access resources and courses to enhance your skills
          and stay competitive in the job market.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> Our platform is designed for easy navigation,
          helping you find what you need quickly.
        </li>
        <li>
          <strong>Community Support:</strong> Join a community of like-minded individuals who are
          on the same journey as you.
        </li>
      </ul>
      <h2>Get Started Today!</h2>
      <p>
        Sign up now to begin your journey towards a fulfilling career. We’re excited to help you
        unlock your potential!
      </p>
    </div>
    <Footer/>
    </div>
  )
}

export default About
