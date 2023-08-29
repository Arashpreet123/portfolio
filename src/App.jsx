
import './App.css'
import Home from "./components/Home/home.jsx"
import NavBar from './components/NavBar/navBar';
import PreLoader from './components/PreLoader/PreLoader'
import Layout from "./components/layout/layout";
// import Model from "./components/Model/Model";
function App() {
  
  return (
    <>
     <PreLoader></PreLoader>
     <Home></Home>
     {/* <NavBar></NavBar> */}
     {/* <Model></Model> */}

     {/* <Layout></Layout> */}
     

    </>
  )
}

export default App
