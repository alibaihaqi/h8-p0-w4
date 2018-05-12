function digitPerkalianMinimum(angka) {
    // you can only write your code here!
  var angkaKosong = [];

  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      var hasilBagi = angka/i;
      var stringDigit = i + '' + hasilBagi;
      angkaKosong.push(stringDigit);
    }
  }

  var digitTerkecil = angkaKosong[0];

  for (var j = 0; j <= angkaKosong.length - 1; j++) {
    if (angkaKosong[j].length < digitTerkecil) {
      digitTerkecil = angkaKosong[j].length;
    }
  }
  return digitTerkecil;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2