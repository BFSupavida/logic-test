

function mapVirtualToPhysical(virtualAddress) {
    // กำหนดตารางแผนที่หน้าหน่วยความจำ
    const pageTable = {
        0: 3,
        1: 2,
        2: 0,
        3: 1
    };

    // กำหนดช่วงที่อยู่สำหรับแต่ละหน้า
    const pageAddressRanges = {
        0: [4096, 8191],
        1: [8192, 12287],
        2: [12288, 16383],
        3: [16384, 20479]
    };

    // หาหน้าเสมือน
    const virtualPage = Math.floor(virtualAddress / 4096);

    // ตรวจสอบว่าหน้าเสมือนอยู่ในช่วงหรือไม่
    if (!(virtualPage in pageTable)) {
        console.error("ข้อผิดพลาด: ที่อยู่หน่วยความจำเสมือนไม่ได้จองไว้");
        return null;
    }

    // แผนที่หน้าเสมือนเป็นหน้าจริง
    const physicalPage = pageTable[virtualPage];

    // คำนวณออฟเซ็ตภายในหน้า
    const offset = virtualAddress % 4096;

    // คำนวณที่อยู่ทางกายภาพ
    const physicalAddress = pageAddressRanges[physicalPage][0] + offset;

    return physicalAddress;
}

// ทดสอบฟังก์ชันด้วยที่อยู่ตัวอย่าง
const virtualAddress = 12300;
const physicalAddress = mapVirtualToPhysical(virtualAddress);
console.log("ที่อยู่เสมือน:", virtualAddress);
if (physicalAddress !== null) {
    console.log("ที่อยู่ทางกายภาพ:", physicalAddress);
}
