
// Day 20
// ### Question 1: Check for Prime Number
// *Problem:*  
// Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.

// *Hint:*  
// - Use a loop to check divisibility from 2 up to the square root of the number.
// - If the number is divisible by any of these, it is not prime.

// typescript
// function isPrime(num: number): boolean {
//     // Your code here
// }

function isPrimeNumber(num: number): boolean{
    if(num <= 1){
        console.log(`${num} is not a prime number because it is less than or equal to one.`)
        return false
    }
    for(let i = 2; i< num; i++){
        if(num % i === 0){
        console.log(`${num} is not a prime number because it is divisible by ${i}.`)
        return false;
        }
    }
    console.log (`${num} is a prime number`);
    return true;
}

console.log(isPrimeNumber(7)); // Expected output: "7 is a prime number."
console.log(isPrimeNumber(10)); // Expected output: "10 is not a prime number because it is divisible by 2."



// ### Question 2: Reverse a Number
// *Problem:*  
// Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, the output should be 4321.

// *Hint:*  
// - Convert the number to a string, reverse the string, and then convert it back to a number.

// typescript
// function reverseNumber(num: number): number {
//     // Your code here
// }

function reverseNum(num : number): number{
    let numStr = num.toString();
    let reverseStr = "";

    for (let i= numStr.length -1; i >= 0; i--){
        reverseStr += numStr[i]
    }

    return parseInt (reverseStr,10);
}

console.log(reverseNum(1234)); // Expected output: 4321
console.log(reverseNum(5678)); // Expected output: 8765


























