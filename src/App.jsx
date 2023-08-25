
import './App.css'
import Home from "./components/Home/home.jsx"
import PreLoader from './components/PreLoader/PreLoader'
import Layout from "./components/layout/layout";
// import Model from "./components/Model/Model";
function App() {
  
  return (
    <>
     <PreLoader></PreLoader>
     <Home></Home>
     {/* <Model></Model> */}

     {/* <Layout></Layout> */}
     

    </>
  )
}

export default App
