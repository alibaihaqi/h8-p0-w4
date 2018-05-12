function angkaPrima(angka) {
  var maxangka = Math.sqrt(angka);
  var hasil = true;
  for (var i = 2; i <= maxangka; i++) {
    if(angka % i === 0) {
      hasil = false;
    }
  }
  return hasil;
  // you can only write your code here!
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(2));