import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import googleLogo from '../../../img/google/google.png'

const Register = () => {
    return (
        <div className='container mx-auto form-container bg-info mt-5 mb-5 p-2'>
            <form>
                <label className='mb-2 ps-2' htmlFor="email">Email</label>
                <br />
                <input className='form-input' type="email" name="email" id="" placeholder='enter your email' />
                <br />
                <label className='mb-2 ps-2' htmlFor="password">Password</label>
                <br />
                <input className='form-input' type="password" name="" id="" placeholder='Password' />
                <br />
                <label className='mb-2 ps-2' htmlFor="password">Confirm Password</label>
                <br />
                <input className='form-input' type="password" name="" id="" placeholder='Confirm Password' />
                <br />
                <p>already have an acount? <span className='form-togol'><Link to='/login'>Please Login</Link></span></p>
                <button className='btn btn-primary mt-5 mx-auto w-100 rounded-pill'>Register Now</button>
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
                <button className='btn btn-primary mt-2 mx-auto w-100 rounded-pill'>
                    <img src={googleLogo} alt="" />
                    Register with google </button>
            </form>
        </div>
    );
};

export default Register;