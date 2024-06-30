function isPerfect(number) {
    let sum = 0;
    // Sonning bo'luvchilarini topish
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    // Son mukammal bo'lsa, yig'indisi o'ziga teng bo'ladi
    return sum === number;
}

function findPerfectNumbers(limit) {
    const perfectNumbers = [];
    for (let i = 1; i <= limit; i++) {
        if (isPerfect(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}

// Test misol
const limit = 15056;
const perfectNumbers = findPerfectNumbers(limit);

console.log(`Mukammal sonlar ${limit} gacha: ${perfectNumbers.join(', ')}`);
