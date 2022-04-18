import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Google from '../Google/Google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailUseRef = useRef('');
    const passUseRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //error massage 
    let errorMassage;
    if (error) {
        errorMassage = <p>Error: {error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    // sign in with google
    const submitHandle = event => {
        event.preventDefault();
        const email = emailUseRef.current.value;
        const password = passUseRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const goingToRegister = event => {
        navigate('/register')
    }

    // reset password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const updatePass = async () => {
        const email = emailUseRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
    }
    return (
        <div className='container mx-auto form-container bg-info mt-5 mb-5 p-5'>
            <form onSubmit={submitHandle}>
                <label className='mb-2 ps-2' htmlFor="email">Email</label>
                <br />
                <input className='form-input' ref={emailUseRef} type="email" name="email" id="" placeholder='enter your email' required />
                <br />
                <label className='mb-2 ps-2' htmlFor="password">Password</label>
                <br />
                <input className='form-input' ref={passUseRef} type="password" name="" id="" placeholder='Password' required />
                <br />
                {errorMassage}
                <p>create a acount <Link to='/register' onClick={goingToRegister} className='text-danger pe-auto text-decoration-none' >Please Register</Link></p>
                <p>Forget Password? <button to='/register' onClick={updatePass} className='btn btn-outline-primary text-danger pe-auto' >Please Reset</button></p>
                <input className='btn btn-primary mt-2 mx-auto w-100 rounded-pill' type="submit" value="Login" />
                <Google></Google>
                <ToastContainer />
            </form>
        </div>
    );
};
export default Login;