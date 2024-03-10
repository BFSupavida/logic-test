function printSequence(num) {
    for (let i = 1; i <= num; i++) {
      if (i && (i & (i - 1)) === 0) {
        console.log("POWER");
      } else {
        console.log(i);
      }
    }
  }

  console.log(printSequence(8))

  