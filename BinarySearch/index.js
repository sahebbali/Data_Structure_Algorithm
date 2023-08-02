function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index where the target was found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Return -1 if the target was not found
}

const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 23;

const index = binarySearch(sortedArray, targetValue);

if (index !== -1) {
    console.log(`Target ${targetValue} found at index ${index}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}




// Another Example ]
function binarySearchRecursive(arr, target, left, right) {
    if (left > right) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Base case: target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right); // Search the right half
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1); // Search the left half
    }
}

const sortedArray1 = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue1 = 12;

const index1 = binarySearchRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);

if (index1 !== -1) {
    console.log(`Target ${targetValue} found at index ${index1}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}
