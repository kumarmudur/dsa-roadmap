// solution 1
// time: O(n) | space: O(1)
function secondLargest(arr) {
    if (arr.length < 2) return "Array should have at least two numbers";
    let firstNum = Number.NEGATIVE_INFINITY;
    let secondNum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstNum) {
            secondNum = firstNum;
            firstNum = arr[i];
        } else if ( arr[i] > secondNum && arr[i] !== firstNum) {
            secondNum = arr[i];
        }
    }
    return secondNum;
}

console.log(secondLargest([0, 3, 5, 2, 7, 9]));