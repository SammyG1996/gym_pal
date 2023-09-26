import React from 'react'
import { IconContext } from 'react-icons';
import {BiLoader} from 'react-icons/bi'

const Spinner = () => {
  return (
    <div className='h-screen w-full flex justify-center mt-[30vh]'>
        <div className=''>
            <IconContext.Provider value={{ size: '2.5rem' }}>
                <BiLoader className='animate-spin animate-infinite animate-duration-[1500ms] animate-ease-linear animate-normal animate-fill-forwards'/>
            </IconContext.Provider>
        </div>
    </div>
  )
}

export default Spinner