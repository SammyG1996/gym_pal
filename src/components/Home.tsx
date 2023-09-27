import React, { useContext, useEffect } from 'react'
import Logo from '../assets/logo.png'
import PrimaryButton from './helper_components/buttons/PrimaryButton'
import SecondaryButton from './helper_components/buttons/SecondaryButton';
import {BsFillPersonPlusFill, BsFillMouseFill} from 'react-icons/bs';
import {MdLogin, MdLogout} from 'react-icons/md';
import { Colors } from '../assets/colors';
import { IsLoggedInContext } from '../App';
import { scrollToTop} from '../helpers/scroll';
import { ContextType } from '../config/ContextType';




const Home = () => {
  const {isLoggedIn, username, formattedDate} = useContext(IsLoggedInContext) as ContextType
  useEffect(()=>{
    scrollToTop();
  },[])
  return (
    <div className='flex justify-center w-full h-screen'>
        <div className={`animate-fade-up animate-once animate-duration-[1000ms] animate-ease-out animate-normal animate-fill-forwards bg-[${Colors.dark}] mt-10 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-5 md:p-10 shadow-xl rounded-lg h-[70vh] md:h-[60vh] max-w-[1000px] w-[92vw] md:w-[50vw] flex flex-col justify-center items-center`}>
            <div>
                <img className='w-[100vw] mx-auto md:w-[35vw]' src={Logo} alt="logo img" />
                <h1 className='text-white font-sans text-xl my-2'>Your ultimate gym companion</h1>
            </div>
            {!isLoggedIn && <div className='grid grid-cols-3 mt-5'>
                <PrimaryButton icon={<BsFillPersonPlusFill />} link={'/signup'} text={'Sign Up'}/>
                <PrimaryButton icon={<MdLogin />} link={'/signin'} text={'Sign In'}/>
                <SecondaryButton icon={<BsFillMouseFill />} link={'/demo'} text={'Demo'}/>
            </div>}
            {isLoggedIn && 
            <div className='grid grid-cols-1  bg-[${Colors.dark}] mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-5 shadow-xl rounded-lg'>
                <h2 className='text-white text-lg'>Welcome Back: {username}</h2>
                <p className='text-white text-md'>Today's Date: {formattedDate}</p>
            </div>
            
            }
            
        </div>
        

    </div>
  )
}

export default Home