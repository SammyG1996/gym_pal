import React from 'react'
import Logo from '../../../assets/logo.png'
import {BsFillPersonPlusFill, BsFillMouseFill} from 'react-icons/bs';
import {MdLogin} from 'react-icons/md';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import { Colors } from '../../../assets/colors';


const NotLoggedInHome = () => {
  return (
    <div>
        <div className={`animate-fade-up animate-once animate-duration-[1000ms] animate-ease-out animate-normal animate-fill-forwards bg-[${Colors.dark}] mt-10 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-5 md:p-10 shadow-xl rounded-lg h-[70vh] md:h-[60vh] max-w-[1000px] w-[92vw] md:w-[50vw] flex flex-col justify-center items-center`}>
            <div>
                <img className='w-[100vw] mx-auto md:w-[35vw]' src={Logo} alt="logo img" />
                <h1 className='text-white font-sans text-xl my-2'>Your ultimate gym companion</h1>
            </div>
            <div className='flex flex-row justify-between mt-5'>
                <PrimaryButton icon={<BsFillPersonPlusFill />} link={'/signup'} text={'Sign Up'}/>
                <PrimaryButton icon={<MdLogin />} link={'/signin'} text={'Sign In'}/>
                <SecondaryButton icon={<BsFillMouseFill />} link={'/demo'} text={'Demo'}/>
            </div>
        </div>
    </div>
  )
}

export default NotLoggedInHome