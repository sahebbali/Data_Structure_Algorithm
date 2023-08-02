function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);

        // Recursively sort the sub-arrays
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
}

function partition(arr, left, right) {
    const pivotValue = arr[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            // Swap elements to move smaller elements to the left
            [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
            partitionIndex++;
        }
    }

    // Swap the pivot element to its correct position
    [arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]];
    return partitionIndex;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
quickSort(unsortedArray);

console.log("Sorted array:", unsortedArray);
