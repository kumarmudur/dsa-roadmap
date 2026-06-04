// find the all even numbers

function findAllEvenNums(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

findAllEvenNums([1, 2, 3, 4, 5]);