import React, { useContext } from 'react'
import { IsLoggedInContext } from '../../../App'
import { ContextType } from '../../../config/ContextType'
import { Colors } from '../../../assets/colors'
import PrimaryButton from '../buttons/PrimaryButton'
import WorkoutCard from './WorkoutCard'

const LoggedInHome = () => {
    const {username, formattedDate, user} = useContext(IsLoggedInContext) as ContextType
    const workouts:Record<string, any> = user ? user.workouts : null;

    return (
        <div className='animate-fade-up animate-once animate-duration-[1000ms] animate-ease-out animate-normal animate-fill-forwards max-w-[1000px] w-[92vw] md:w-[50vw]'>
                <div className={`grid grid-cols-1 bg-[${Colors.dark}] mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-5 shadow-xl rounded-lg`}>
                    <h1 className='text-white text-lg'>Welcome Back: {username}</h1>
                    <p className='text-white text-md'>Today's Date: {formattedDate}</p>
                    <div className='mx-auto my-2'>
                        <PrimaryButton text='Create New Workout'/>
                    </div> 
                </div>

                <div className={`grid grid-cols-1 bg-[${Colors.dark}] mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-5 shadow-xl rounded-lg`}>
                    <h2 className='text-white text-2xl'>Workouts</h2>
                    {Object.keys(workouts).length > 0 && 
                    <>
                        {Object.values(workouts).map((item) =>{
                            if(!item.archived){
                                return (
                                    <WorkoutCard item={item} key={item.name}/>
                                )
                            }
                        })}
                    </>}

                    {Object.keys(workouts).length === 0 && 
                    <div className={`text-white text-lg my-2 bg-[${Colors.dark}] mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-5 shadow-xl rounded-lg`}>
                        <p>No workouts here.</p>
                        <p className=''>Create your first workout!</p>
                    </div>}
                </div>


        </div>
    )
}

export default LoggedInHome