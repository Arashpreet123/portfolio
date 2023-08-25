import './navBar.scss';
import logo from "C:/Users/pandh/GitHub/port/src/assets/ap-logo.png"
const NavBar = () => {
    return (
        <>
        <div>
            <nav className="navBar">
                <img src = {logo} className="title"></img>
                   
                <ul>
                    <li>
                        <a href="projects">Home</a>
                    </li>
                    <li>
                        <a href="projects">About</a>
                    </li>
                    <li>
                        <a href="projects">Projects</a>
                    </li>
                    <li>
                        <a href="projects">Blog</a>
                    </li>
                    <li>
                        <a href="projects">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>

        </>
         
    )
}

export default NavBar;