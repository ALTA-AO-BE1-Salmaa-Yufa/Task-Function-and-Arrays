// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
// Sample Test Case
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// Input: [2, 2, 2, 11]
// Output: 2
// Explanation: The first two elements after removing the duplicates will be [2, 11].

function removeDuplicates(array) {
    const uniqueElement = {};

    for (let i = 0; i<array.length; i++ ) {
        const element = array[i];

    if(!uniqueElements[element]) {

        uniqueElements[element] = true;
    }
    }
    const uniqueArray = Object.keys(uniqueElement).map(Number);
    return uniqueArray
}

const arrayWithDuplicates = [2, 3, 3, 3, 6, 9, 9]
const result = removeDuplicates(arrayWithDuplicates);
console.log(result);