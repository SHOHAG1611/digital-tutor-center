import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './Register.css'
import Google from '../../Google/Google';

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
                <input  className='btn btn-primary mt-2 mx-auto w-100 rounded-pill' type="submit" value="Register" />
                <Google></Google>
            </form>
        </div>
    );
};

export default Register;