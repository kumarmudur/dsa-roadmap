function secondLargest(arr) {
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