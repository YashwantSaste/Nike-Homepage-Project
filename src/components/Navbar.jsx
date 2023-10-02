import React from 'react'; 
import header from "../assets/images/header-logo.svg";
import { navLinks } from '../constants';
import { GiHamburgerMenu } from "react-icons/gi";
import { hamburger } from '../assets/icons';
const Navbar = () => {
  return (  
    <div className='absolute padding-x py-8 z-10 w-full'>
      <nav className='flex gap-16 justify-between items-center'>
        <a href='/'>
          <img src={header}/>
        </a>
        <ul className='flex gap-16 max-lg:hidden'>
          {
            navLinks.map((link,index)=>{
              return (
                <li key={index} 
                className='text-lg font-montserrat text-slate-gray leading-normal'>
                <a href={link.href}>
                  {link.label}
                </a>
                </li>
              )
            })
          }
        </ul>
        <div className='flex gap-3 max-lg:hidden'>
          <a href='/'>Sign Up</a>
          <a href='/'>Log In</a>
        </div>
        <div className='hidden max-lg:block'>
          <GiHamburgerMenu/>
        </div>
    </nav>
    </div>
  )
}

export default Navbar