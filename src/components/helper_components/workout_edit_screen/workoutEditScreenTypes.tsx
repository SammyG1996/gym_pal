export type workoutDataType = {
    name: string;
    workoutTemplate: {
        [key: string] : {
            position: number;
            name: string;
            repsMax: number;
            repsMin: number;
            warmupSets: { weights: number; reps: number }[];
            sets: { weights: number; reps: number }[];
            notes: string;
            restTime: number;
            Superset?: { exersise: string };
        }
    }, 
    workoutHistory: [
        {
            date: string, 
            exercises: {
                [key: string] :{
                    name: string;
                    notes: string;
                    restTime: number;
                    sets: { weights: number; reps: number }[];
                    warmupSets: { weights: number; reps: number }[];
                }
            }
    }]
}

export type ExerciseEditCardProps = {
     
        name: string;
        notes: string;
        position: number;
        repsMax: number;
        repsMin: number;
        restTime: number;
        sets: {weights: number, reps: number}[];
        warmupSets: {weights: number, reps: number}[];
    

}