import React, { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type ButtonProps = {
    icon?: ReactNode;
    link?: string;
    text?: string;
}

const PrimaryButton = ({icon=null, link, text}:ButtonProps) => {
  return (
    <>
        {link && 
        
        <Link to={link}>
        <button className='flex items-center rounded-lg px-3 py-2 m-1 text-white bg-[#98C1D9] hover:bg-[#E0FBFC] hover:text-[#98C1D9] shadow-lg'  >
            <div className='flex items-center justify-between mx-auto'>
                {icon}<span className={`whitespace-nowrap ${icon !== null && 'pl-2'}`}>{text}</span>
            </div>
        </button>
        </Link>}
        {!link && <button className='flex items-center rounded-lg px-3 py-2 m-1 text-white bg-[#98C1D9] hover:bg-[#E0FBFC] hover:text-[#98C1D9] shadow-lg'  >
            <div className='flex items-center justify-between mx-auto'>
                {icon}<span className={`whitespace-nowrap ${icon !== null && 'pl-2'}`}>{text}</span>
            </div>
        </button>}
    </>


  )
}
export default PrimaryButton