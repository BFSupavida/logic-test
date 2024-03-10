//input array of number
//
//return count many times that array was change

function countArrayNumber(num) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
      let position = i + 1;
      if (position % 4 === 1) {
        if (num[i] < 0) {
          count++;
        } else if (num[i] === 0) {
          count = -1;
          return count;
        }
      }
      //ในตำแหน่งที่เท่ากับ 0
      if (position % 4 === 2 || position % 4 === 0) {
        //ถ้าเป็นตัวเลข ไม่ว่าจะเต็มบวกหรือเต็มลบ ก็ใช้ได้
        if (num[i] < 0 || num[i] > 0) {
          count++;
        }
      }
      //ตำแหน่งที่ติดลบ แต่เป็น num[i] = 0 จะคิดต่อไม่ได้ให้รีเทิร์น count -1 แล้วจบ
      if (position % 4 === 3) {
        if (num[i] > 0) {
          count++;
        } else if (num[i] === 0) {
          count = -1;
          return count;
        }
      }
    }
    return count;
  }

const C = [1, 2, 3, 4, 5, 6];
const D = [1, 0, -2, 0];
const E = [1, 1, 0, 3, -1];
console.log(countArrayNumber(C));
console.log(countArrayNumber(D));
console.log(countArrayNumber(E));