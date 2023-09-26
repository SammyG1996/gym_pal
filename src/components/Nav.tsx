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
// import NutritionApi from './helpers/NutritionApi'



const Nav = () => {
    const [menuClicked, setMenuClicked] = useState(false);
    const contextValue = useContext(IsLoggedInContext) ?? { isLoggedIn: false, username: '' };
    const { isLoggedIn, username } = contextValue;
    

    const handleHamburgerClick = () => {
        setMenuClicked( (bool) => {
            return !bool
        })
    }
    const handleLogOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // e.preventDefault();
        // updatedIsLoggedIn(false);
        // updateToken('');
        // updateAlert('You have been succefully logged out')
        // sessionStorage.removeItem('token')
        // sessionStorage.removeItem('username')
        // NutritionApi.token = null;
        // NutritionApi.bearer_token_req = null;
        // navigate('/')
    }

    return (
        // Icon light color hex 31C48D
        <div className='sticky top-0 w-full h-[70px] flex justify-between px-4 items-center bg-[#293241] text-white shadow-md z-50'>
            <div>
                <Link to={'/'}><img src={Logo} alt="image logo" style={{height: "30px"}}/></Link>      
            </div>

            {/* Menu */}
            <ul className='hidden md:flex '>

                {isLoggedIn && 
                    <li>
                         <div className='flex items-center justify-between h-full mr-2'>
                            <h3 className='text-[1rem]'>Hello {username}</h3>
                         </div>
                    </li>
                }

                <li className='flex h-[70px] px-2 hover:bg-[#98C1D9]'>
                    <button className='flex items-center'>
                        <div className='flex items-center justify-between'>
                            <AiFillHome /><span className='pl-2'><Link to={'/'}>Home</Link></span>
                        </div>
                    </button>
                </li>

                {!isLoggedIn && <li className='flex h-[70px] px-2 hover:bg-[#98C1D9]'>
                    <button className='flex items-center'>
                        <div className='flex items-center justify-between'>
                            <BsFillPersonPlusFill /><span className='pl-2'><Link to={'/signup'}>Sign Up</Link></span>
                        </div>
                    </button>
                </li>}

                {isLoggedIn && <li className='flex h-[70px] px-2 hover:bg-[#98C1D9]'>
                    <button className='flex items-center' >
                        <div className='flex items-center justify-between'>
                            <BsFillClipboardDataFill /><span className='pl-2'><Link to={'/counter'}>Workouts</Link></span>
                        </div>
                    </button>
                </li>}
                

                {isLoggedIn &&  <li className='flex h-[70px] px-2 hover:bg-[#98C1D9]'>
                    <button className='flex items-center'>
                        <div className='flex items-center justify-between'>
                            <CgProfile /><span className='pl-2'><Link to={'/profile'}>Profile</Link></span>
                        </div>
                    </button>
                </li>}

                {!isLoggedIn && <li className='flex h-[70px] px-2 hover:bg-[#EE6C4D]'>
                    <button className='flex items-center' >
                        <div className='flex items-center justify-between'>
                            <MdLogin /><span className='pl-2'><Link to={'/signin'}>Sign In</Link></span>
                        </div>
                    </button>
                </li>}
                {isLoggedIn && <li className='flex h-[70px] px-2 hover:bg-[#EE6C4D]'>
                    <button onClick={handleLogOut} className='flex items-center' >
                        <div className='flex items-center justify-between'>
                            <MdLogout /><span className='pl-2'>Logout</span>
                        </div>
                    </button>
                </li>}
                
            </ul>

            {/* Hamburger Icon */}
            <div className='md:hidden z-10 ' onClick={handleHamburgerClick}>
                {menuClicked ? <FaTimes/> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <ul className={menuClicked ? 'absolute top-0 left-0 w-full h-screen bg-[#293241] text-white flex flex-col justify-center items-center' : 'hidden'}>
            <li className='flex justify-center w-[100%] h-[70px] px-2 hover:bg-[#98C1D9]'>
                    <button className='flex items-center' onClick={handleHamburgerClick}>
                        <div className='flex items-center justify-between'>
                            <AiFillHome /><span className='pl-2'><Link to={'/'}>Home</Link></span>
                        </div>
                    </button>
                </li>

                {!isLoggedIn && <li className='flex justify-center w-[100%] h-[70px] px-2 hover:bg-[#98C1D9]'>
                    <button className='flex items-center' onClick={handleHamburgerClick}>
                        <div className='flex items-center justify-between'>
                            <BsFillPersonPlusFill /><span className='pl-2'><Link to={'/signup'}>Sign Up</Link></span>
                        </div>
                    </button>
                </li>}

                {isLoggedIn && <li className='flex justify-center w-[100%] h-[70px] px-2 hover:bg-[#98C1D9]'>
                    <button className='flex items-center' onClick={handleHamburgerClick}>
                        <div className='flex items-center justify-between'>
                            <BsFillClipboardDataFill /><span className='pl-2'><Link to={'/counter'}>Workouts</Link></span>
                        </div>
                    </button>
                </li>}
                

                {isLoggedIn && <li className='flex justify-center w-[100%] h-[70px] px-2 hover:bg-[#98C1D9]'>
                    <button className='flex items-center' onClick={handleHamburgerClick}>
                        <div className='flex items-center justify-between'>
                            <CgProfile /><span className='pl-2'><Link to={'/profile'}>Profile</Link></span>
                        </div>
                    </button>
                </li>}

                {!isLoggedIn && <li className='flex justify-center w-[100%] h-[70px] px-2 hover:bg-[#EE6C4D]'>
                    <button className='flex items-center' onClick={handleHamburgerClick}>
                        <div className='flex items-center justify-between'>
                            <MdLogin /><span className='pl-2'><Link to={'/signin'}>Sign In</Link></span>
                        </div>
                    </button>
                </li>}

                {isLoggedIn && <li className='flex justify-center w-[100%] h-[70px] px-2 hover:bg-[#EE6C4D]'>
                    <button onClick={(e)=> {handleLogOut(e); handleHamburgerClick();}} className='flex items-center' >
                        <div className='flex items-center justify-between'>
                            <MdLogout /><span className='pl-2'>Logout</span>
                        </div>
                    </button>
                </li>}
            </ul>

        </div>
    )
}

export default Nav