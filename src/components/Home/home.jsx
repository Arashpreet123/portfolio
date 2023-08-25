import NavBar from '../NavBar/navBar';
import './home.scss';
import Cube from '../cube/cube';
import vid from "C:/Users/pandh/GitHub/port/src/assets/background.mp4";
import Layout from "../layout/layout";
import Model from "../Model/model"
import profile from "../../assets/profile.jpg";
import useLocalStorage from 'use-local-storage-state'

const Home = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    
    setLightMode();
    
    return (
        <>          
        <div className="homePage">
            
            <div className='model'>
                <Model></Model>
            </div>
            <div className = "themeChange">
                <button onClick={setLightMode}>
                    light
                </button>
                <button onClick={setDarkMode}>
                    dark
                </button>
            </div>
                 

                <div className='introduction'>
                    <p>Hello, I'm a software developer based in Seattle!</p>
                </div>

                <div className='align'>
                    <div className = "name">
                            <h2>Arashpreet Singh Pandher</h2>
                            <p> (Developer / Designer / Creator)</p>
                            
                    </div>
                    <div className='profile'>
                                <img src = {profile}></img>
                    </div>
                </div>
                <div className="aboutSection">
                    <p>
                        I am recent graduate from the University of Washington class of 2023 B.S. in computer science. My primary interests are
                        software design and development, artificial intelligence, and web development.
                    </p>
                
                    <p>
                        I always knew that I was going to be working with technology. I remember my first time writing code at khan academy in elementary. Which was building a website about a game with HTML. From there onwards I knew I found my passion in programming. 
                        Now as a recent graduate in computer science, I am enthusiastically looking to apply my skills and knowledge to real-world problems.
                    </p>
                    <p>
                        My specialties are being able to quickly learn new skills, problem-solving, Model View Controler, and object-oriented programming (OOP). 
                        The programming languages that I have experience using are Java, Javascript, HTML, Python, and SQL. I'm still eager to learn other programming languages, frameworks, and principles which I can put in my toolbox. 
                        I am excited to join a dynamic team where I can continue to grow and learn while making meaningful contributions to the field of computer science.
                    </p>
                </div>
                <div className ="Projects">
                    These are my projects
                </div>
                {/* <div className="cube">
                    <Cube></Cube>

                </div> */}
                            </div>

        </>
         
    )
}

export default Home;