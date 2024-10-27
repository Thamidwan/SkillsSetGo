import { Children } from "react";
import './Navbar.css'

export default function Navbar() {
    const path = window.location.pathname;
    return (
        <nav className="nav">
            <a href="/home" className="site-title">SkillsSetGo</a>
            <ul>
                <CustomLink href="/home">Home</CustomLink>
                <CustomLink href="/About">About</CustomLink>
                <CustomLink href="/testimonial">Testimonial</CustomLink>
                <CustomLink href="/ussd">login</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    );
}
