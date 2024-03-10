//anagrams
//input 2 str
//function check 2 str that anagrams or not
//keep str1 then loop for check str2 that have all of charater in str1 
//else charactor mush have equal 
//return boolean that check anagrams

function checkAnagram(str1, str2) {
    //convert to array first by splie and sort 
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();
    if (arr1.length !== arr2.length) {
        return false
    } 
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) {
            return false
    }
    return true
}
}
console.log(checkAnagram("mai", "iam6"));

//intersection of 2 array
//get 2 array input
//function check intersection
//loop check same number then keep it in  new value
//return intersection

let arr1 = [1,2,3]
let arr2 = [2,3,4]

function findIntersection(arr1, arr2) {
    let intersection = []
    for (let index = 0; index < arr1.length; index++) {
        // Check if the current element exists in arr2
        if (arr2.includes(arr1[index])) {
            // If it does, add it to the intersection array
            intersection.push(arr1[index]);
        }
    }
    return intersection;
}

console.log(findIntersection(arr1, arr2));