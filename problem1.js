// Problem 1 - Exponentiation
// Given two integers x and n, write a function to compute x^n.
// Sample Test Cases
// Input : x = 2, n = 3
// Output : 8

// Input : x = 7, n = 2

function eksponen (x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) { 
        result *= x;
        console.log(i)
    }
    
    return result; 
}

let x = process.argv[2]
let n = process.argv[3]
console.log(eksponen(x,n));