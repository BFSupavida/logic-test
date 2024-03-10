function solution(N) {
    // แปลง N เป็นรูปแบบไบนารี
    let binary = N.toString(2);
    
    let maxGap = 0; // ตัวแปรเพื่อเก็บความยาวของช่องว่างไบนารีสูงสุด
    let currentGap = 0; // ตัวแปรเพื่อเก็บความยาวของช่องว่างไบนารีปัจจุบัน
    
    // ทำการวนลูปผ่านรูปแบบไบนารี
    for (let i = 0; i < binary.length; i++) {
        // หากพบ '1', อัพเดท maxGap ตามที่จำเป็นและรีเซ็ต currentGap
        if (binary[i] === '1') {
            maxGap = Math.max(maxGap, currentGap);
            currentGap = 0;
        } else { // หากพบ '0', เพิ่มค่า currentGap
            currentGap++;
        }
    }
    
    return maxGap;
}

console.log(solution(1041)); // ผลลัพธ์: 5
console.log(solution(32));   // ผลลัพธ์: 0
