import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Landing2 from './pages/Landing2'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'


function App() {

  return (
    <Routes className="scroll-smooth">
      <Route path = "/" element ={<Home/>}/>
      {/* <Route path = "/landing2" element ={<Landing2/>}/> */}
      <Route path = "/about" element ={<AboutUs/>}/>
      <Route path = "/contact" element ={<ContactUs/>}/>
    
    </Routes>
  )
}

export default App
