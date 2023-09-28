import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'
import { Colors } from '../../../assets/colors'

type WorkoutCardProps = {
    item: {
        name: string;
        workoutHistory: [{date:string}];
    }
}

const WorkoutCard = ({item}:WorkoutCardProps) => {
  return (
            <div className={`flex flex-col text-white bg-[${Colors.dark}] mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-5 shadow-xl rounded-lg`} >    
                <h2 className='text-2xl underline'>{item.name}</h2>
                <p className='mb-2'>Date of Last Workout: {item.workoutHistory.length > 0 && item.workoutHistory[item.workoutHistory.length - 1].date}{item.workoutHistory.length < 1 && "No Record"}</p>
                <PrimaryButton text='Start'/>
                <div className='grid grid-cols-3'>
                    <SecondaryButton text='History'/>
                    <SecondaryButton text='Edit'/>
                    <SecondaryButton text='Archive'/> {/**I want an ARE YOU SURE prompt when clicked */}
                </div>
            </div>
    )
}

export default WorkoutCard