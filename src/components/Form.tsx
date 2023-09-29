import React, { useEffect } from 'react'
import SignInForm from './helper_components/forms/SignInForm'
import SignUpForm from './helper_components/forms/SignUpForm'
import { scrollToTop } from '../helpers/scroll'
import { useLocation } from 'react-router-dom'


const Form = () => {
    useEffect(()=>{
        scrollToTop();
    })
    const location = useLocation();
    console.log(location.pathname)
  return (
    <div className='flex justify-center w-full h-screen animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-normal animate-fill-forwards'>
      <div className='max-w-[1000px]'>

        {location.pathname === "/signin" && <SignInForm />}
        {location.pathname === "/signup" && <SignUpForm />}

      </div>
    </div>
  )
}

export default Form