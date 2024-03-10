//i <3 u
//input
//functiob count u
//return how many u in input

//input
// const word = 'university';

// function countu(input) {
//     let keptu = 0;
//     for (let index = 0; index < input.length; index++) {
//         const element = input[index];
//         if (element === "u" || element === "U") {
//             keptu = keptu + 1;
//         }
//     }
//     return keptu;
// }

// console.log(countu(word));

//i <3 vowel
//input paragraph
//function to find amount of vowel charactor (a e i o u)
//return how many vowel in paragraph

// const paragraph = 'icutmyhairbecauseyoudonotcaremyheart';

// function countVowel(input) {
//     let vowel = {
//         keptA: 0,
//         keptE: 0,
//         keptI: 0,
//         keptO: 0,
//         keptU: 0
//     };
//     for (let index = 0; index < input.length; index++) {
//         const element = input[index];
//         if (element === 'a' || element === "A") {
//             vowel.keptA += 1;
//         } else if (element === 'e' || element === "E") {
//             vowel.keptE += 1;
//         } else if (element === 'i' || element === "I") {
//             vowel.keptI += 1;
//         } else if (element === 'o' || element === "O") {
//             vowel.keptO += 1;
//         } else if (element === 'u' || element === "U") {
//             vowel.keptU ++;
//     }
//     }
//     return vowel;
// }

// console.log(countVowel(paragraph));

//i <3 everyone
//input
//function count amount of each character
//return amount of each character

// const paragraph = "pleasedontwalkaway";

// function countCharacter(input) {
//   let numberofCharactor = 0;
//   for (let index = 0; index < input.length; index++) {
//     numberofCharactor++;
//   }
//   return numberofCharactor;
// }

// console.log(countCharacter(paragraph));

function printSequence(num) {
  for (let i = 1; i <= num; i++) {
    if (i && (i & (i - 1)) === 0) {
      console.log(`POWER`);
    } else {
      console.log(i);
    }
  }
}

console.log(printSequence(8));
