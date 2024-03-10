//get input a and b (its number)
//function 1. count lovelynumber
//2.check islovely number?
//return many of lovely b=number between a and b

function countLovelyNumber(A, B) {

    let count = 0;
    for (let i = A; i <= B; i++) {
        if (isLovelyNumber(i)) {
            count++        
        }
    }
    return count
}

function isLovelyNumber(number) {
    const numStr = number.toString(); // แปลงตัวเลขเป็นสตริงเพื่อให้ง่ายต่อการเข้าถึงแต่ละหลัก
    const digitCount = {}; // เก็บจำนวนครั้งที่แต่ละตัวเลขปรากฎในตัวเลขที่ให้มา

    // นับจำนวนการปรากฎของแต่ละตัวเลข
    for (let digit of numStr) {
        if (digitCount[digit]) {
            digitCount[digit]++;
        } else {
            digitCount[digit] = 1;
        }
    }

    // เช็คว่ามีตัวเลขที่ซ้ำกันมากกว่า 3 ครั้งหรือไม่
    for (let digit in digitCount) {
        if (digitCount[digit] >= 3) {
            return false; // หากพบว่ามีตัวเลขที่ซ้ำกันมากกว่าหรือเท่ากับ 3 ครั้ง จะส่งค่า false กลับ
        }
    }

    return true;     
}

// console.log(isLovelyNumber(155));
// console.log(countLovelyNumber(1, 111));