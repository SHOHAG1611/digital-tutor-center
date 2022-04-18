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
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});


    const navigate=useNavigate();
    const goingToLogin=event=>{
        navigate('/register')
    }

    const submitHandle=event=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(email,password)
    }

    if(user){
        navigate('/checkout')
    }

      //error massage 
      let errorMassage;
      if (error) {
             errorMassage=<p>{error?.message}</p>
        }
    return (
        <div className='container mx-auto form-container bg-info mt-5 mb-5 p-2'>
            <form onSubmit={submitHandle}>
                <label className='mb-2 ps-2' htmlFor="name">Name</label>
                <br />
                <input className='form-input' type="text" name="name" id="" placeholder='Enter Your Name' required/>
                <br />
                <label className='mb-2 ps-2' htmlFor="email">Email</label>
                <br />
                <input className='form-input' type="email" name="email" id="" placeholder='Enter your email' required/>
                <br />
                <label className='mb-2 ps-2' htmlFor="password">Password</label>
                <br />
                <input className='form-input' type="password" name="password" id="" placeholder='Password' required/>
                <br />
                <p>already have a account? <Link to='/login' onClick={goingToLogin} className='text-danger pe-auto text-decoration-none' >Please Login</Link></p>
                {errorMassage}
                <input  className='btn btn-primary mt-2 mx-auto w-100 rounded-pill' type="submit" value="Register" />
                <Google></Google>
            </form>
        </div>
    );
};

export default Register;