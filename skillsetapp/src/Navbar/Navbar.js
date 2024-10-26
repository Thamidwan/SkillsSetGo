import { Children } from "react";
import './Navbar.css'
import Login from "../Login/Login";
export default function Navbar() {
    const path = window.location.pathname;
    return (
        <nav className="nav">
            <a href="/home" className="site-title">SkillsSetGo</a>
            <ul>
                <CustomLink href="/home">Home</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/testimonial">Testimonial</CustomLink>
                <CustomLink href="/Login">login</CustomLink>
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
