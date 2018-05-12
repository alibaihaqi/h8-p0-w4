function  totalDigitRekursif(angka) {
  var angkaString = String(angka);
  if (String(angka).length === 1) {
    return Number(angkaString);
  }
  else {
    return Number(angkaString[0]) + totalDigitRekursif(Number(angkaString.slice(1)))
  }
  // you can only write your code here!
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5