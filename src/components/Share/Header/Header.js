import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
   <nav className='header-style d-flex justify-content-around'>
       <CustomLink to='/'>Home</CustomLink>
       <CustomLink to='/blogs'>Blogs</CustomLink>
       <CustomLink to='/about'>About Me</CustomLink>
       <CustomLink to='/login'>Login</CustomLink>
   </nav>
    );
};

export default Header;