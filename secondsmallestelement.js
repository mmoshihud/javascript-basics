function findSecondSmallest(array) {
    array.sort((a, b) => a - b);
    return array[1];
}

console.log(findSecondSmallest([5, 8, 9, 4, 6, 7, 5, 1]));
