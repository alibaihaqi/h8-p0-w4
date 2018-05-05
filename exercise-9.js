function tukarBesarKecil(kalimat) {
  // you can only write your code here!
var kalimat1 = kalimat.split('');

var kalimatBesar = kalimat.toUpperCase().split('');
var kalimatKecil = kalimat.toLowerCase().split('');

var kalimatBaru = [];

for (var i = 0; i <= kalimat1.length - 1; i++) {
    if (kalimat1[i] === kalimatBesar[i]) {
      kalimatBaru.push(kalimat1[i].toLowerCase());
    }
    else if (kalimat1[i] === kalimatKecil[i]) {
      kalimatBaru.push(kalimat1[i].toUpperCase());
    }
}
return kalimatBaru.join('');
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"