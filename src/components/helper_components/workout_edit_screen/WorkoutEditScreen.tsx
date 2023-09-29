import React, { useContext } from 'react';
import { Colors } from '../../../assets/colors';
import { ContextType } from '../../../config/ContextType';
import { IsLoggedInContext } from '../../../App';
import { useParams } from 'react-router-dom';
import { workoutDataType } from './workoutEditScreenTypes';
import { workoutExercisesMergeSort } from '../../../helpers/workoutExercisesMergeSort';
import ExerciseEditCard from './ExerciseEditCard';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

const WorkoutEditScreen = () => {
    const {username, formattedDate, user} = useContext(IsLoggedInContext) as ContextType
    const {workoutName} = useParams();
    const workoutData:workoutDataType = user && workoutName ? user.workouts[workoutName] : null;
    const name = workoutData ? workoutData.name : undefined;
    const workoutTemplate = workoutData ? workoutData.workoutTemplate : null
    const workoutTemplateArray = workoutTemplate ? Object.values(workoutTemplate) : null;
    const sortedWorkoutTemplateArray = workoutTemplateArray ? workoutExercisesMergeSort(workoutTemplateArray) : null; /**this will contain the sorted array to be itterated over */
    console.log(sortedWorkoutTemplateArray)
    
    
    return (
        <div className={`mx-auto animate-fade-up animate-once animate-duration-[1000ms] animate-ease-out animate-normal animate-fill-forwards max-w-[1000px] w-[92vw] md:w-[50vw]`}>
                <div className={`grid grid-cols-1 bg-[${Colors.dark}] mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-5 shadow-xl rounded-lg`}>
                    <div className='flex items-center justify-center'>   
                        <input type="text" name="name" id="name" placeholder={name} className='text-center text-2xl w-[100%] rounded-lg'/>

                    </div>
                    <div className={`my-1 flex justify-center text-white bg-[${Colors.dark}] mt-5 bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 p-2 shadow-xl rounded-lg`}>
                            <div className='grid grid-cols-2'>
                                <SecondaryButton text='Add Exercise'/>
                                <PrimaryButton text='Save'/>
                            </div>

                    </div>

                    {sortedWorkoutTemplateArray && sortedWorkoutTemplateArray.map((exercise) =>{
                        const {name, notes, position, repsMax, repsMin, sets, warmupSets, restTime} = exercise;
                        return <ExerciseEditCard name={name} notes={notes} position={position} repsMax={repsMax} repsMin={repsMin} sets={sets} warmupSets={warmupSets} restTime={restTime}/>
                    })}
                </div> 
        </div>
    )
}

export default WorkoutEditScreen