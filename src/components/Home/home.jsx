import NavBar from '../NavBar/navBar';
import './home.scss';
import Cube from '../cube/cube';
import vid from "C:/Users/pandh/GitHub/port/src/assets/background.mp4";
import Layout from "../layout/layout";
import Model from "../Model/model"
import profile from "../../assets/profile.jpg";
import useLocalStorage from 'use-local-storage-state'
import Projects from '../Projects/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Contact from "../Contact/contact";
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
                <NavBar></NavBar>
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
                                <img className = "profileImg"src = {profile}></img>
                    </div>
                </div>
                <div className="aboutSection">
                    <h2 className='subHeading1'>About Me</h2>
                    <p>
                    I'm Arashpreet S. Pandher, an enthusiast who fell in love with coding at an early age. Back in the 4th grade, I built my first website in HTML/CSS on Khan Academy, dedicated to the lore of the legendary game "The Legend of Zelda." Little did I know that I was already coding back then, and I found the process incredibly fun.

My fascination with creating websites, complete with animations, continued to grow. 
                    </p>
                    <p>
                    After a brief hiatus, I rediscovered my passion for coding in college when I realized that I had been programming as a kid. It was during those university years that I decided to pursue coding as my career.

I embarked on a journey of self-learning, diving into various coding projects. With every passing month, I became more convinced that software development was my calling. As I honed my skills and tackled solo projects, I knew I was on the right path.

In university, I acquired a diverse set of skills, and in my senior year, I began working at Shoperies, where I further refined my abilities. Collaborating with my mentor at Shoperies elevated my standards as a developer, and I continued to learn and grow.
                    </p>
                    <p>
                    Today, I'm actively seeking a full-time role where I can leverage my coding expertise and business acumen to contribute to a company's success. My journey has equipped me with a unique blend of technical skills and a deep understanding of how technology can drive business objectives. I'm excited to apply these skills to help companies achieve their goals.
                    </p>
                
                    {/* <p>
                        I always knew that I was going to be working with technology. I remember my first time writing code at khan academy in elementary. Which was building a website about a game with HTML. From there onwards I knew I found my passion in programming. 
                        Now as a recent graduate in computer science, I am enthusiastically looking to apply my skills and knowledge to real-world problems.
                    </p>
                    <p>
                        My specialties are being able to quickly learn new skills, problem-solving, Model View Controler, and object-oriented programming (OOP). 
                        The programming languages that I have experience using are Java, Javascript, HTML, Python, and SQL. I'm still eager to learn other programming languages, frameworks, and principles which I can put in my toolbox. 
                        I am excited to join a dynamic team where I can continue to grow and learn while making meaningful contributions to the field of computer science.
                    </p> */}
                </div>
                <div className ="work">
                    <h2 className='subHeading'>Projects</h2>
                    <Projects></Projects>
                </div>
                <div className='Link'>
                    <h1>Links</h1>
                    <div className='links'>
                        <a href="https://www.linkedin.com/in/arashpreet-pandher-5a6295222/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" className="social-icon" />
                        </a>
                        <a href="https://github.com/Arashpreet123">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="white" className="social-icon" />
                        </a>
                        
                    </div>
                    
                </div>
                    <Contact></Contact>
                </div>

        </>
         
    )
}

export default Home;