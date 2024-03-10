//input number
//function that
//return number to !

// function factorialize(num) {
//   if (num === 0 || num === 1) return 1;
//   else if (num < 0) {
//     return "number has to be positive.";
//   } else {
//     for (let i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return num;
//   }
// }

// console.log(factorialize(7));
// console.log(factorialize(-2));

//bonus
//function get input count input 1-n
//keep resual at arrayFactorial value
//return 1!-n!
// function bonusFactorialize(num) {
//     let arrayFactorial = []
//     if (num === 0 || num === 1) {
//         return "1!"; 
//     }
//     else if (num < 0) {
//         return "number has to be positive.";
//     } else {
//         return `${num}!+${bonusFactorialize(num-1)}`
//     }
// }

// console.log(bonusFactorialize(8));
// console.log(bonusFactorialize(0));
// console.log(bonusFactorialize(-8));

//revesrse string
//input string
//function reverst string start w last str
//return reverst string

// function reverseString(str) {
//     let reverse = ""
//     for (let index = str.length - 1; index >= 0; index--) {
//         reverse = reverse + str[index]
//     }
//     return reverse
// }
// console.log(reverseString("hello"));

// //other way built-in function
// function reverseString(str) {
//     //split = split method to return a new array
//     //reverse() method to reverse the new created array
//     //join() method to join all elements of the array into a string
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("habibi"));

//input str
//function reverse str the order of each word
//loop input start at the last str
//return reverse str that keep in new value


function reverseEachword(str) {
    let newreverse = ""
    for (let index = str.length - 1; index >= 0; index--) {
        newreverse = newreverse + str[index]
    }
    return newreverse
}

console.log(reverseEachword("i love u to the moon and back"));
