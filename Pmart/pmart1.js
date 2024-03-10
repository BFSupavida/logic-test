//input array
//find largest number inarray
//loop for check number and keep number in new value 
//complare number in value that >
//return largestnumber

const number = [50, 0, 8555555555555555555555555]

function checkLargestnumber(array) {
    let largestnumber = array[0];
    //start index 1 bc we kept index 0 at largestnumber
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (element > largestnumber) {
            //ให้เก็บค่า element แทนที่ค่า largestnumber
            largestnumber = element;
        }
    }
    return largestnumber
}

console.log(checkLargestnumber(number));

//2
//1 text string 
//1 character 
//function mush have keep 2 input
//function loop check string contains input character
//if text string have input character return true
//if dont return fales
//

// const textString = "icutmyhairbecauseyoudonotcaremyheart"
// const character = "b"

// function checkCharacterintextstring(textString, character) {

//     for (let index = 0; index < textString.length; index++) {
//         //dont care case sensitive
//         // const element = textString[index].toLowerCase();
//         const element = textString[index];
//         if (character === element) {
//             return true
//         } 
//     }
//     //loop done if still dont find it return false
//     return false
// }

// console.log(checkCharacterintextstring(textString, "a"));


