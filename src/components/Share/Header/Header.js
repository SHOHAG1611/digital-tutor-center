import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    const [user]=useAuthState(auth);

    const SignOutHandler=()=>{
        signOut(auth);
    }
    return (
   <nav className='header-style d-flex justify-content-around sticky-top'>
       <CustomLink to='/'>Home</CustomLink>
       <CustomLink to='/checkout'>CheckOut</CustomLink>
       <CustomLink to='/blogs'>Blogs</CustomLink>
       <CustomLink to='/about'>About</CustomLink>
       {
           user?
           <button className='btn btn-outline-primary' onClick={SignOutHandler}>SignOut</button>
           :
           <CustomLink to='/login'>Login</CustomLink>
        }
   </nav>
    );
};

export default Header;