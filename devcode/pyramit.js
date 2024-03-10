
function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      let stars = '*'.repeat(i);
      console.log(stars);
    }
  }
  
  printPyramid(4)