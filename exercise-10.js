function checkAB (num) {
  var huruf = num.split('');
  var hasil = false;

  for (var i = 0; i <= huruf.length - 1; i++) {
      if (huruf[i] === 'a') {
        if (i+4 <= huruf.length) {
          if(huruf[i+4] === 'b') {
            hasil = true;
          }
        }
    }
    else if (huruf[i] === 'b') {
      if (i+4 <= huruf.length) {
        if(huruf[i+4] === 'a') {
          hasil = true;
        }
      }
    }
  }
  return hasil;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false