function solution(input) {
    // Implement your solution here
    let binary = input.toString(2)
    console.log(binary);
    let count = 0

    for (let i = 1; i < binary.length -1; i++) {
        if (binary[i] === '0' && binary[i+1] === '0') {
            count++;
        }
    }
    return count
}

console.log(solution(1041))