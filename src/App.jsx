import { Route, Routes } from 'react-router-dom'
import Landing1 from './pages/Landing1'
import Landing2 from './pages/Landing2'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'


function App() {

  return (
    <Routes>
      <Route path = "/" element ={<Landing1/>}/>
      <Route path = "/landing2" element ={<Landing2/>}/>
      <Route path = "/about" element ={<AboutUs/>}/>
      <Route path = "/contact" element ={<ContactUs/>}/>
    
    </Routes>
  )
}

export default App
