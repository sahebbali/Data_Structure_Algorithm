function linearSearchString(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index where the target was found
        }
    }
    return -1; // Return -1 if the target was not found
}

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const targetName = "ali";

const index = linearSearchString(names, targetName);

if (index !== -1) {
    console.log(`Name "${targetName}" found at index: ${index}`);
} else {
    console.log(`Name "${targetName}" not found in the array`);
}


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index where the target was found
        }
    }
    return -1; // Return -1 if the target was not found
}

const array = [5, 10, 3, 8, 2, 7];
const targetValue = 8;

const index1 = linearSearch(array, targetValue);

if (index1 !== -1) {
    console.log(`Target ${targetValue} found at index ${index1}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}





