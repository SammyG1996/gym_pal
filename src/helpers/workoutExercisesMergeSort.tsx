type Exercise = {
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

function merge(arr1: Exercise[], arr2: Exercise[]): Exercise[] {
    const sortedArr: Exercise[] = [];
    let counter1 = 0;
    let counter2 = 0;
    while (counter1 < arr1.length && counter2 < arr2.length) {
        if (arr1[counter1].position > arr2[counter2].position) {
            sortedArr.push(arr2[counter2]);
            counter2 += 1;
        } else {
            sortedArr.push(arr1[counter1]);
            counter1 += 1;
        }
    }
    while (counter1 < arr1.length) {
        sortedArr.push(arr1[counter1]);
        counter1 += 1;
    }
    while (counter2 < arr2.length) {
        sortedArr.push(arr2[counter2]);
        counter2 += 1;
    }

    return sortedArr;
}

export function workoutExercisesMergeSort(arr: Exercise[]): Exercise[] {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = workoutExercisesMergeSort(arr.slice(0, middle));
    const right = workoutExercisesMergeSort(arr.slice(middle));
    return merge(left, right);
}