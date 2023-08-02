function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already in place, so we only need to go up to n - 1 - i
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(unsortedArray);

console.log("Sorted array:", unsortedArray);
