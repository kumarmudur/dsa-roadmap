// find smallest number in array
// time: O(n) | space: O(1)
function smallestNumber(arr) {
    let smallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestNumber([2, -6, 4, 8, 1, -9]));