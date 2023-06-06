import React from 'react';
import { NavLink} from 'react-router-dom';

 function Nav()
 {
  
    return(
        <nav className='navb'>
        <span className='logo'>BOOST UP</span>
           <div className='icons'>
            <a href='' className='home'>HOME</a> 
            
            <NavLink to='/' className='tuts'>INTRO</NavLink>
            <NavLink to='/components/login' className='login'>LOGIN</NavLink>
            <a  href='' className='signup'>SIGN UP</a>
           </div> 
       
        </nav>
    );
 }
 export default Nav;