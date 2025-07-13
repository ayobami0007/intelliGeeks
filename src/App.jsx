import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'


function App() {

  return (
    <Routes className="scroll-smooth">
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/about" element ={<AboutUs/>}/>
      <Route path = "/contact" element ={<ContactUs/>}/>
    
    </Routes>
  )
}

export default App
