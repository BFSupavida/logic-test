//input
//function loop input for checked value of number
//if all before index is <= return true
//else return false 

const numberArray = [1,3,2]

// function sortedNumber(array) {

//     for (let index = 0; index < array.length; index++) {
//         if (array[index] > array[index+1]) {
//             return false
//         } 
//     }
//     return true
// }

// console.log(sortedNumber(numberArray));

//input array
//function avg of number
//loop for keep every number in array and set it to new value
//then / array.length
//return avg of array

// function avg(array) {
//     let sumNumber = 0
//     for (let index = 0; index < array.length; index++) {
//         sumNumber = sumNumber + array[index];
//     }
//     let avg = sumNumber/(array.length)
//     return avg
// }

// console.log(avg(numberArray));

//input array
//function that reverses the array
//loop for check the value in array 
//pick the last array to kept in new value
//then pick the lase array -1 to keep in new input
//return new value that have number of array

function reversesArray(array) {
    let reversedArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        reversedArray.push(element); // เพิ่มสมาชิกใหม่ลงในอาร์เรย์ที่เป็นผลลัพธ์
    }
    return reversedArray; // ส่งค่าอาร์เรย์ที่กลับกลับไป
}

console.log(reversesArray(numberArray));