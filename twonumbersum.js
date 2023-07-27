function findTwoNumbersWithSum(list, targetValue) {
    const numMap = [];

    for (let i = 0; i < list.length; i++) {
        const currentNumber = list[i];
        const difference = targetValue - currentNumber;
        if (numMap[difference] !== undefined) {
            return [numMap[difference], i];
        }
        numMap[currentNumber] = i;
    }

    return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const target = 9;
const result = findTwoNumbersWithSum(sortedArray, target);
console.log(result);
