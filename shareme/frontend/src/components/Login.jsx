import React from 'react'
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'


const Login = () => {
  const handleLogin = (profile, token) => {
    // do something with profile and token
    console.log(profile); // logs the profile object
    console.log(token); // logs the token string
  };
  const handleError = (error) => {
    // do something with error
    console.error(error); // logs the error object
  };
  const googleOneTap = useGoogleOneTapLogin({
    clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
    onSuccess: handleLogin, 
    onFailure: handleError,
  });
  return (
    <div className='flex justify-start items-cetered flex-col h-screen'>
        <div className='relative w-full h-full'>
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className='w-full h-full object-cover'
          />
          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
            <div className='p-5'>
              <img src={logo} width="130px" alt='logo'/>
            </div>
            <div className='shadow-2xl'>
              <button 
                type='button'
                className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                onClick={googleOneTap}
              >
                <FcGoogle className='mr-4'/> Sign in with Google
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login