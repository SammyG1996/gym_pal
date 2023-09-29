import React from 'react'
import { useState, useContext } from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from "react-icons/fa"
import {AiFillHome} from "react-icons/ai"
import {BsFillPersonPlusFill, BsFillClipboardDataFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {MdLogout, MdLogin} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { IsLoggedInContext } from '../App'
import { ContextType } from '../config/ContextType'
import { GymPalAPI } from '../helpers/GymPalAPI'
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { FaHistory } from 'react-icons/fa'
import { BiDumbbell } from 'react-icons/bi'



const BottomNav = () => {
    const [menuClicked, setMenuClicked] = useState(false);
    const {isLoggedIn, username, updatedIsLoggedIn, updateToken, updateAlert, updateUsername, updateUser} = useContext(IsLoggedInContext) as ContextType
    const navigate = useNavigate();

    const handleHamburgerClick = () => {
        setMenuClicked( (bool) => {
            return !bool
        })
    }
    const handleLogOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        updatedIsLoggedIn();
        updateToken('');
        updateAlert('You have been succefully logged out')
        localStorage.removeItem('gym_pal')
        GymPalAPI.token = null;
        GymPalAPI.bearer_token_req = undefined;
        navigate('/')
    }

    return (
        // Icon light color hex 31C48D
        <div className='md:hidden sticky bottom-0 w-full h-[70px] flex justify-between px-4 items-center bg-[#293241] text-white shadow-lg z-50'>
            

            <Link to={'/'}>
                    <div className='flex flex-col items-center justify-center h-[100%] w-[70px]'>
                        <AiFillHome className='text-xl' />
                        <span className='text-sm'>Home</span>
                    </div>
            </Link>
          

            {!isLoggedIn && 
                    <Link to={'/signup'}>
                        <div className='flex flex-col items-center justify-center h-[100%] w-[70px]'>
                            <BsFillPersonPlusFill className='text-xl' />
                            <span className='text-sm'>Sign Up</span>
                        </div>
                    </Link>}


                {isLoggedIn && 
                <Link to={'/'}>
                    <div className='flex flex-col items-center justify-center h-[100%] w-[70px]'>
                        <GiWeightLiftingUp className='text-xl'/>
                        <span className='text-sm'>Workout</span>
                    </div>
                </Link>}
                    

            {isLoggedIn &&
                <Link to={'/'}>
                    <div className='flex flex-col items-center justify-center h-[100%] w-[70px]'>
                        <BiDumbbell className='text-xl'/>
                        <span className='text-sm'>Exercises</span>
                    </div>
                </Link>}





            {!isLoggedIn && 
                <Link to={'/signin'}>
                    <div className='flex flex-col items-center justify-center h-[100%] w-[70px]'>
                        <MdLogin className='text-xl'/>
                        <span className='text-sm'>Sign In</span>
                    </div>
                </Link>}
            

                {isLoggedIn &&
                <Link to={'/'}>
                    <div className='flex flex-col items-center justify-center h-[100%] w-[70px]'>
                        <FaHistory className='text-xl'/>
                        <span className='text-sm'>Logs</span>
                    </div>
                </Link>}




        </div>
    )
}

export default BottomNav