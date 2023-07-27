function findMostFrequentElement(array) {
    const countFrequency = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (countFrequency[element]) {
            countFrequency[element]++;
        } else {
            countFrequency[element] = 1;
        }

    }

    for (const element in countFrequency) {
        if (countFrequency[element] > maxFrequency) {
            mostFrequentElement = element;
            maxFrequency = countFrequency[element];
        }
    }

    return mostFrequentElement;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(array);
console.log(mostFrequent);