import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../../img/google/google.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './Register.css'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate=useNavigate();
    const goingToLogin=event=>{
        navigate('/register')
    }

    const submitHandle=event=>{
        event.preventDefault();
        // console.log(event.target.email.value)
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(email,password)
    }
    if(user){
        navigate('/checkout')
    }
    return (
        <div className='container mx-auto form-container bg-info mt-5 mb-5 p-2'>
            <form onSubmit={submitHandle}>
                <label className='mb-2 ps-2' htmlFor="name">Name</label>
                <br />
                <input className='form-input' type="text" name="name" id="" placeholder='Enter Your Name' />
                <br />
                <label className='mb-2 ps-2' htmlFor="email">Email</label>
                <br />
                <input className='form-input' type="email" name="email" id="" placeholder='Enter your email' />
                <br />
                <label className='mb-2 ps-2' htmlFor="password">Password</label>
                <br />
                <input className='form-input' type="password" name="password" id="" placeholder='Password' />
                <br />
                <p>already have a acount? <Link to='/login' onClick={goingToLogin} className='text-danger pe-auto text-decoration-none' >Please Login</Link></p>
                <input type="submit" value="Register" />
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
                    Register with google </button>
            </form>
        </div>
    );
};

export default Register;