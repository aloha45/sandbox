function printGreeting(name){
    return "Hello there " + name + "."
}

console.log(printGreeting("Slimer"))

//call a function reverse word order

function reverseWordOrder (word){
    return word.split(" ").reverse().join(" ")
}
console.log(reverseWordOrder("Ishmael me Call"))

// Write a function called calculate.

// This function should take three arguments, two numbers and a string.

// Name the parameters num1, num2, and operation.

// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1). */

function calculate (num1, num2, operation){
    if (operation === "add"){
        return num1 + num2;
    } else if (operation === "sub"){
        return num1 - num2;
    } else if (operation === "mult"){
        return num1 * num2;
    } else if (operation === "div"){
        return num1 / num2;
    } else if (operation === "exp"){
        return num1 ** num2;
    }
}
console.log(calculate(4, 3, "exp"))

// Write a function printConsecutives that can take an array of any length, and print groups of three numbers 
// where three consecutive numbers increase by 1.

function printConsecutives (arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] + 1 === arr [i + 1] && arr[i + 1] + 1 === arr[i + 2]{
            const subArr = [arr[i]], arr [i+1], arr[i+2];
            newArray.push(subArr);
        }
        return newArray;
        }
    console.log(print)