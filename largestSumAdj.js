// Finding the largest sum of non-adjacent numbers
const numbers = [2, 40, 6, 2, 5, 8, 9];
let prevMax = 0;
let currMax = 0;

for (let i = 0; i < numbers.length; i++) {
    const newMax = Math.max(currMax, prevMax + numbers[i]);
    prevMax = currMax;
    currMax = newMax;
}

console.log(currMax);


// Need to practice this a bit more