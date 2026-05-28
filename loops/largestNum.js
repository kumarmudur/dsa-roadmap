// largest number

function largestNum(arr) {
    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(largestNum([1, 2, 6, 3, 25, 8, 10]));