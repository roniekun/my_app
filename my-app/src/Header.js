import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Components/Navbar/Home';
import Contact from './Components/Navbar/Contact';
import About from './Components/Navbar/About';
import Portfolio from './Components/Navbar/Portfolio';
import './Header.css';



function Header() {
  return (
  
    <BrowserRouter>
      <div className='header__container'>
        <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter> 
    
  )
}

export default Header