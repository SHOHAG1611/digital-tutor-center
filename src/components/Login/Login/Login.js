import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import googleLogo from '../../img/google/google.png'

const Login = () => {
    return (
        <div className='container mx-auto form-container bg-info mt-5 mb-5 p-5'>
            <form>
                <label className='mb-2 ps-2' htmlFor="email">Email</label>
                <br />
                <input className='form-input' type="email" name="email" id="" placeholder='enter your email' />
                <br />
                <label className='mb-2 ps-2' htmlFor="password">Password</label>
                <br />
                <input className='form-input' type="password" name="" id="" placeholder='Password' />
                <br />
                <p>create a acount <span className='form-togol'><Link to='/register'>Please Register</Link></span></p>
                <button className='btn btn-primary mt-5 mx-auto w-100 rounded-pill'>Login</button>
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
                    login with google </button>
            </form>
        </div>
    );
};

export default Login;

































{/* <form>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
</div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form> */}