function ubahHuruf1(kata) {
  var dictionary = 'abcdefghijklmnopqrstuvwxyza';
  var kata1 = kata.split('');
  var hasil = '';


  for (var i = 0; i <= kata1.length - 1; i++) {
    if (kata1[i] === ' ') {
      hasil = hasil + ' ';
    }
    else {
      hasil = hasil + dictionary[dictionary.indexOf(kata1[i])+1];
    }
  }
  return hasil;
}

// TEST CASES
console.log(ubahHuruf1('wow')); // xpx
console.log(ubahHuruf1('developer')); // efwfmpqfs
console.log(ubahHuruf1('javascript')); // kbwbtdsjqu
console.log(ubahHuruf1('keren')); // lfsfo
console.log(ubahHuruf1('semangat')); // tfnbohbu