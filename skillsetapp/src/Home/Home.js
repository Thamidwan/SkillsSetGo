import './Home.css';
import Footer from '../Footer/Footer';
function Home() {
  return (
    <>
      <div className="banner">
        <h1>GET EQUIPPED WITH THE SKILLSETGO</h1><br />
        <p>
          SkillSetGo equips you with in-demand skills for today’s job market, bridging education and industry needs. Gain hands-on experience, practical knowledge, and connect with a supportive community. Prepare for real-world challenges and turn your career goals into achievements with SkillSetGo.
        </p>
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
        <button className="cta-button">Join Now</button>
        <button className="explore-button">Explore More</button>
      </div><br></br><br></br>
      <br></br> <br></br><br></br>     <Footer />
    </>
  );
}

export default Home;
