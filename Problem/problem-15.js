function countFlips(coinSequence) {
    let flips = 0;
    for (let i = 0; i < coinSequence.length - 1; i++) {
        if (coinSequence[i] === '2' && coinSequence[i + 1] === '1') {
            flips++;
        }
    }
    return flips;
}

// Test misollar
const testCases = [
    { input: '12112', expected: 2 },
    { input: '11111211', expected: 1 },
    { input: '12121212122', expected: 5 },
];

testCases.forEach((test, index) => {
    const result = countFlips(test.input);
    console.log(`Test ${index + 1}: Input = ${test.input}, Output = ${result}, Expected = ${test.expected}`);
});