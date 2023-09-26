import React, { useEffect } from 'react'
import SignInForm from './helper_components/forms/SignInForm'
import { scrollToTop } from '../helpers/scroll'

const SignIn = () => {
    useEffect(()=>{
        scrollToTop();
    })
  return (
    <div className='flex justify-center w-full h-screen animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-normal animate-fill-forwards'>
      <div className='max-w-[1000px] pt-10'>

        <SignInForm />

      </div>
    </div>
  )
}

export default SignIn