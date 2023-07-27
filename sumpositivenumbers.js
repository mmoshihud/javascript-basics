function sumPositiveNumbers(number) {
    let sum = 0;

    for (let item of number) {
        if (item > 0) {
            sum += item
        }
    }

    return sum;

}

const numbers = [2, -5, 10, -3, 7];

const result = sumPositiveNumbers(numbers);

console.log(result);