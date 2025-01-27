// Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunks of the specified size

// ex. chunk [(1, 2, 3, 4, 5, 6, 7, 8) 3] ====> [[1,2,3], [4,5,6], [7,8]]


function chunk(arr, num) {
    const newArr = [];
    let currentIndex = 0;

    for (let i = num; currentIndex < arr.length; i += num) { // Use '<' instead of '<='
        console.log(i);
        let chunk = arr.slice(currentIndex, i);
        newArr.push(chunk);
        currentIndex = i; // Update currentIndex
    }

    return newArr;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));