import './navBar.scss';
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from 'react';
const NavBar = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <>
        <header>
            <h3>LOGO</h3>
            <nav className="navBar" ref = {navRef}>                   
                <a href="projects">Home</a>
                <a href="projects">About</a>
                <a href="projects">Projects</a>
                <a href="projects">Blog</a>
                <a href="projects">Contact</a>
                <button className = "nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className = "nav-btn nav-close-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>

        </>
         
    )
}

export default NavBar;