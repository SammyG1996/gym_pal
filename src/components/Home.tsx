import React, { useContext, useEffect } from 'react'
import { IsLoggedInContext } from '../App';
import { scrollToTop} from '../helpers/scroll';
import { ContextType } from '../config/ContextType';
import NotLoggedInHome from './helper_components/home_screen/NotLoggedInHome';
import LoggedInHome from './helper_components/home_screen/LoggedInHome';

const Home = () => {
  const {isLoggedIn} = useContext(IsLoggedInContext) as ContextType
  useEffect(()=>{
    scrollToTop();
  },[])
  return (
    <div className='flex justify-center w-full h-screen'>
      {!isLoggedIn && <NotLoggedInHome />}
      {isLoggedIn && <LoggedInHome />}
    </div>
  )
}

export default Home