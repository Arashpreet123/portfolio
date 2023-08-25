
import Home from '../Home/home'
import NavBar from '../NavBar/navBar'
import './layout.scss'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Model from '../Model/model';

function layout() {
  
  return (
    <>
    <div className="border">
        <Home></Home>
        
        <Model></Model>
        {/* <NavBar></NavBar> */}
        
    </div>

    </>
  )
}

export default layout
