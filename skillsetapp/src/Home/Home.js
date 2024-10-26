import './Home.css';
import Footer from '../Footer/Footer';
function Home() {
  return (
    <>
      <div class="container">
   <h1>
   GET EQUIPPED WITH THE SKILLSETGO
   </h1>
   
   <p>
   SkillSetGo equips you with in-demand skills for today’s job market, bridging education and industry needs. 
    Gain hands-on experience, practical knowledge, and connect with a supportive community. 
    Prepare for real-world challenges and turn your career goals into achievements with SkillSetGo.
    </p>
   <div class="cards">
    <div class="card">
     <img alt="People raising hands in a meeting" height="200" src="https://storage.googleapis.com/a1aa/image/KQTTvMz3J24DFVfrZlWNTkt4bD1Lz7lRrXgNoTAHqwuPVX1JA.jpg" width="300"/>
     <div class="card-content">
      <i class="fas fa-user-tie">
      </i>
      <h3>
       Management &amp; leadership
      </h3>
     </div>
    </div>
    <div class="card">
     <img alt="Person holding a tablet in an office" height="200" src="https://storage.googleapis.com/a1aa/image/iL34wRPMmaa2PFnHfwxFU6Obd3EoLZ2b3ixuo0rV34TOVX1JA.jpg" width="300"/>
     <div class="card-content">
      <i class="fas fa-user-cog">
      </i>
      <h3>
       Project management
      </h3>
     </div>
    </div>
    <div class="card">
     <img alt="Person in a suit giving a presentation" height="200" src="https://storage.googleapis.com/a1aa/image/rwTOu6IBaHKKD90MUSu0lKsEN37qjYaGfyxHHS5TO7kOVX1JA.jpg" width="300"/>
     <div class="card-content">
      <i class="fas fa-briefcase">
      </i>
      <h3>
       Essential business skills
      </h3>
     </div>
     <i class="fas fa-arrow-right">
     </i>
    </div>
   </div>
  </div>    <Footer />
    </>
  );
}

export default Home;
