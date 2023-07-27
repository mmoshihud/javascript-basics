function romanToInteger(roman) {
    let result = 0;

    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = 0; i < roman.length; i++) {
        const current = romanNumerals[roman[i]];
        const next = romanNumerals[roman[i + 1]];

        if (current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("MICCC"));
console.log(romanToInteger("LXDCCC"));
console.log(romanToInteger("XXXXC"));
