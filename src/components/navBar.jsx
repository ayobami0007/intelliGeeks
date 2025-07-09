import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg'
const Navbar = () =>{
return(
   <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
    <img src={logo} alt="IntelliGeeks Logo" className="h-10 w-auto  " />
    

  <ul className="hidden md:flex gap-8 text-sm font-medium text-[#424352] items-center">
    <li><a href="#">Home</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Our Class</a></li>
    <li><a href="#">Our Services</a></li>
    <li>
      <button className="bg-[#2545F5] text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
        Contact Us
      </button>
    </li>
  </ul>
</nav>

)
}


export default Navbar;