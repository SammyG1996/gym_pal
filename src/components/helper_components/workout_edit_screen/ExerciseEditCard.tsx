import React from 'react'
import { Colors } from '../../../assets/colors'
import { ExerciseEditCardProps } from './workoutEditScreenTypes';
import SecondaryButton from '../buttons/SecondaryButton';
import PrimaryButton from '../buttons/PrimaryButton';

const ExerciseEditCard = ({name, notes, position, repsMax, repsMin, sets, warmupSets}:ExerciseEditCardProps) => {

    console.log(sets)
    return (
        <div className={`flex flex-col text-white bg-[${Colors.dark}] mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-5 shadow-xl rounded-lg`}>

            <h1 className='text-md'>{name}</h1>
            <div className={`my-1 text-black bg-white mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-2 shadow-xl rounded-lg`}>
                <h2 className=''>Rep Range:</h2>
                <div className='grid grid-cols-2'>
                    <div className='grid grid-cols-1 mx-2'>
                        <label htmlFor="repsMax">Max</label>
                        <input className='text-center rounded-lg' type="number" name="repsMax" id="repsMax" placeholder={`${repsMax}`} />
                    </div>
                    <div className='grid grid-cols-1 mx-2'>
                        <label htmlFor="repsMin">Min</label>
                        <input className='text-center rounded-lg' type="number" name="repsMin" id="repsMin" placeholder={`${repsMin}`} />
                    </div>
                </div>
            </div>

            <div className={`my-1 text-black bg-white mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-2 shadow-xl rounded-lg`}>
            <h2 className=''>Sets:</h2>

                <div className='grid grid-cols-2'>
                    <div className='grid grid-cols-1 mx-2'>
                        <label htmlFor="sets">Regular</label>
                        <input className='text-center rounded-lg' type="number" name="sets" id="sets" placeholder={`${Object.keys(sets).length}`} />
                    </div>
                    <div className='grid grid-cols-1 mx-2'>
                        <label htmlFor="warmupSets">Warm Up</label>
                        <input className='text-center rounded-lg' type="number" name="warmupSets" id="setwarmupSetss" placeholder={`${Object.keys(warmupSets).length}`} />
                    </div>
                </div>

 
            </div>


                    <div className='mx-auto mt-2'>
                        <SecondaryButton text='Delete'/>
                    </div>
      

        </div>
    )
}

export default ExerciseEditCard