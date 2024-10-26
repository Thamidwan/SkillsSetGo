import './Footer.css';

function Footer() {
  return (
    <footer className="footerr">
      <div className="footer-cont">
        <p>&copy; {new Date().getFullYear()} SkillSetGo. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
