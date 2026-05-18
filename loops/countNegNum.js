// count negative numbers
// time: O(N) | space: O(1)
function countNegativeNumbers(nums) {
    let count = 0;
    for (let num of nums) {
        if (num < 0) count++;
    }
    return count;
}
console.log(countNegativeNumbers([2, -6, 4, 8, 1, -9, -1]));