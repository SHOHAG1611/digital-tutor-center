import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../img/google/google.png'
const Google = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate =useNavigate();
    let errorMassage;
    if (error) {
           errorMassage=<p>Error: {error?.message}</p>
      }
      if(user){
          navigate('/checkout')
      }

    return (
        <div>
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
            <div>
                {/* <p className='text-danger'>error: {error?.message}</p> */}
                {errorMassage}
            </div>
            <button onClick={()=>signInWithGoogle()} className='btn btn-success mt-2 mx-auto w-100 rounded-pill'>
                <img src={googleLogo} alt="" />
                Continue with google </button>
        </div>
    );
};

export default Google;