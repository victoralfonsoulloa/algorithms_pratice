// Imagine you have a list of two numbers and a target number. Your job is to find two numbers in that list that add up that add up to the target number. You also need to tell wich positions (or indexes) those two numbers are at in the list.

// Example: If the list is [2, 7, 11, 15] and the target is 9, then thr answer would be [0, 1], because 2 (at index 0) plus 7 (at index 1) equals 9.

const list = [15, 11, 2, 7];

function twoSum (list, target) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++){
            console.log(i);
            console.log(j);
            console.log("-------");
            if (list[i] + list[j] == target) {
                return [list[i], list[j]];
            }
        }
    }
    return "None of the numbers in the list add up to the target number";
}

console.log(twoSum (list, 9));