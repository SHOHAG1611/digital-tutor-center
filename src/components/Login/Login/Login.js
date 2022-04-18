import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import googleLogo from '../../img/google/google.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const emailUseRef = useRef('');
    const passUseRef = useRef('');
    const  navigate=useNavigate()
    const location=useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
        navigate(from, { replace: true });
      }
    const submitHandle=event=>{
        event.preventDefault();
        const email=emailUseRef.current.value;
        const password=passUseRef.current.value;
        // console.log(password,email)
        signInWithEmailAndPassword(email,password)
    }

    const goingToRegister=event=>{
        navigate('/register')
    }
    return (
        <div className='container mx-auto form-container bg-info mt-5 mb-5 p-5'>
            <form onSubmit={submitHandle}>
                <label className='mb-2 ps-2' htmlFor="email">Email</label>
                <br />
                <input className='form-input' ref={emailUseRef} type="email" name="email" id="" placeholder='enter your email' required/>
                <br />
                <label className='mb-2 ps-2' htmlFor="password">Password</label>
                <br />
                <input className='form-input' ref={passUseRef} type="password" name="" id="" placeholder='Password' required />
                <br />
                <p>create a acount <Link to='/register' onClick={goingToRegister} className='text-danger pe-auto text-decoration-none' >Please Register</Link></p>
                <input className='btn btn-primary mt-2 mx-auto w-100 rounded-pill' type="submit" value="Login" />
                <div className='another-option text-white'>
                    <div>
                        <p>_________________</p>
                    </div>
                    <div>
                        <p className='mt-2 mx-2'>Or</p>
                    </div>
                    <div>

                        <p>_________________</p>
                    </div>
                </div>
                <button className='btn btn-success mt-2 mx-auto w-100 rounded-pill'>
                    <img src={googleLogo} alt="" />
                    login with google </button>
            </form>
        </div>
    );
};
export default Login;
// {/* <button className='btn btn-primary mt-2 mx-auto w-100 rounded-pill'>Login</button> */}