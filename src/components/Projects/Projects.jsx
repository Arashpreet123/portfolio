import React, { useEffect } from "react";
import './Projects.scss';
import ArrowFall from '../../assets/ArrowFall.png';
import ghg from '../../assets/GHG.png';
import TheLastMagus from '../../assets/TheLastMagus.png';
import TriviaMazeGame from '../../assets/TriviaMaze.png';


const Projects = () => {

    
    return (
        <div className="Projects">
            <a href="https://github.com/Arashpreet123/TCSS491Game" target="_blank">
                <div className="ProjectOne" onClick>
                    <div className="portfolio">
                        <img  src={ArrowFall}></img>
                    </div>
                    <div className="projectTitle">
                        <h2>ArrowFall Adventures</h2>
                    </div>
                    <div className="techStack">
                        <h2>Tech Stack</h2>
                        <p>JavaScript, HTML</p>
                    </div>
                </div>
            </a>
            <a href="https://github.com/amanva/Parts_store/tree/main" target="_blank">

                <div className="ProjectTwo">
                    <div className="portfolio">
                        <img  src={ghg}></img>
                    </div>
                    <div className="projectTitle">
                        <h2>Gear Head Garage</h2>
                    </div>
                    <div className="techStack">
                        <h2>Tech Stack</h2>
                        <p>JS, HTML/CSS, React, Node.js, Express.js, Mysql</p>
                    </div>
                </div>
            </a>
            <a href="https://github.com/Arashpreet123/The-Last-Magus" target="_blank">
                <div className="ProjectThree">
                    <div className="portfolio">
                        <img  src={TheLastMagus}></img>
                    </div>
                        <div className="projectTitle">
                    <h2>The Last Magus</h2>
                    </div>
                    <div className="techStack">
                        <h2>Tech Stack</h2>
                        <p>JavaScript, HTML</p>
                    </div>
                </div>
            </a>
            <a href="https://github.com/Arashpreet123/TCSS360Game" target="_blank">
                <div className="ProjectFour">
                    <div className="portfolio">
                        <img  src={TriviaMazeGame}></img>
                    </div>
                    <div className="projectTitle">
                        <h2>Animal Trivia</h2>
                    </div>
                    <div className="techStack">
                        <h2>Tech Stack</h2>
                        <p>Java, JavaFx, SQLite</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Projects;