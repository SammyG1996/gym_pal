import React, { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type ButtonProps = {
    icon?: ReactNode;
    link?: string | null;
    text?: string;
}

const SecondaryButton = ({icon=null, link=null, text}:ButtonProps) => {
  return (
    <>
          {link && 
          <Link to={link}>
            <button className='flex items-center rounded-lg px-3 py-2 m-1 text-white bg-[#EE6C4D] hover:bg-[#ffd2c7] hover:text-[#EE6C4D] shadow-lg'>
              <div className='flex items-center justify-between mx-auto text-center'>  
                    {icon}<span className={`whitespace-nowrap ${icon !== null && 'pl-2'}`}>{text}</span>  
              </div>
          </button>
          </Link>
}

        {!link && <button className='flex items-center rounded-lg px-3 py-2 m-1 text-white bg-[#EE6C4D] hover:bg-[#ffd2c7] hover:text-[#EE6C4D] shadow-lg'  >
            <div className='flex items-center justify-between mx-auto text-center'>
                {icon}<span className={`whitespace-nowrap ${icon !== null && 'pl-2'}`}>{text}</span>
            </div>
        </button>}
    </>

  )
}
export default SecondaryButton