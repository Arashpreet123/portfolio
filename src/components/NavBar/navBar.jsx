import './navBar.scss';
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from 'react';
import logo from "../../assets/logo.png"
const NavBar = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <>
        <header>
            <div className='logo'>
                <img src={logo}></img>
            </div>
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