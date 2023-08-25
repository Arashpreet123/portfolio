import './cube.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'

const Cube = () => {

    return(
        <>
        <div>
         <div className = 'stage-cube-cont'>
            <div className ='cubespinner'>
                <div className = 'face1'>
                    <FontAwesomeIcon icon={faHtml5} color ="white" />
                </div>
                <div className = 'face2'>
                    <FontAwesomeIcon icon={faCss3} color = "white"/>
                </div>
                <div className = 'face3'>
                    <FontAwesomeIcon icon={faJava} color = "white"/>
                </div>
                <div className = 'face4'>
                    <FontAwesomeIcon icon={faJsSquare} color="white"/>
                </div>
                <div className = 'face5'>
                    <FontAwesomeIcon icon={faGitAlt} color="white" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faReact} color="white" />
                </div>
                
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Cube;