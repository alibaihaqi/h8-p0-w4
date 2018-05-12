function changeVocals (str) {
  var kata = str.split('');
  var vocal = 'abijuvefopABIJUVEFOP';
  var vocalPisah = vocal.split('');

  var hasilVocal = '';


  for (var i = 0; i <= kata.length - 1; i++) {
     if (kata[i] === vocal[vocal.indexOf(kata[i])]) {
       hasilVocal = hasilVocal + vocal[vocal.indexOf(kata[i])+1];
     }
     else if (kata[i] === ' ') {
       hasilVocal = hasilVocal + ' ';
     }
     else {
       hasilVocal = hasilVocal + kata[i];
     }
  }
  return hasilVocal;
  //code di sini
}

function reverseWord (str) {
  var balikKata = str.split('').reverse().join('');  
  return balikKata;
  //code di sini
}

function setLowerUpperCase (str) {
  var kata = str;
  var kataPisah = kata.split('');
  var kataKecil = kata.toLowerCase().split('');
  var kataBesar = kata.toUpperCase().split('');

  var gantiUkuran = '';

  for (var i = 0; i <= kataPisah.length - 1; i++) {
    if (kataPisah[i] === kataKecil[i]) {
      gantiUkuran = gantiUkuran + kataPisah[i].toUpperCase();
    }
    else if (kataPisah[i] === kataBesar[i]) {
      gantiUkuran = gantiUkuran + kataPisah[i].toLowerCase();
    }
    else {
      gantiUkuran = gantiUkuran + ' ';
    }
  }
  return gantiUkuran;
  //code di sini
}

function removeSpaces (str) {
  hapusSpasi = str.split(' ').join('');
  return hapusSpasi;  
  //code di sini
}

function passwordGenerator (name) {
  if (name.split('').length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  else {
    var gantiVocal = changeVocals(name);
    var balikHuruf = reverseWord(gantiVocal);
    var ubahUkuran = setLowerUpperCase(balikHuruf);
    var ilanginSpasi = removeSpaces(ubahUkuran);
    return ilanginSpasi;
  }
  //code di sini
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'