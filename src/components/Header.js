import Navbar from './Navbar';
import { ThemeContext } from '../context/ThemeContext';
import './Header.css';


function Header({showNavbar,isSmallScreen,isDesktop}) {

 

  return ( 
  <ThemeContext.Consumer>
    {({ theme }) => (
      <>
    
      <div id={`component-${theme}`}  className='header__container'>

     
       
        <h1 id={`component-${theme}`} className='logo'>ronie<span>kun.io</span></h1>

     
    
      
    {/* <a href="/" className="logo">
      <img
        src="/path/to/logo.png"
        alt="roniekun."
      />
    </a> */}
      
        <Navbar showNavbar={showNavbar} 
        isDesktop={isDesktop}
        isSmallScreen={isSmallScreen}
        />

      </div>
      </>
             )}
        </ThemeContext.Consumer>
     

    
  )
}

export default Header