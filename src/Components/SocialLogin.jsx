import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Provider/useAuth';

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const navigate = useNavigate()
    // const location = useLocation()

    const handeleGoogleSignIn = () => {
        googleSignIn()
        .then(res =>{
              toast.success('Successfuly logged in')  
              navigate('/')     
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div>
            <div className='flex mb-2 justify-center'>
                <button onClick={handeleGoogleSignIn} className='btn w-[340px] text-white font-bold hover:bg-purple-700 bg-purple-600'><AiOutlineGoogle className='text-2xl'></AiOutlineGoogle>Sign in with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;