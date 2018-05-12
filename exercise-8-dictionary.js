function urutkanAbjad1(str) {
  var dictionary = 'abcdefghijklmnopqrstuvwxyza';
  var kata1 = str.split('');
  var numKata = [];
  var urutNumKata = [];
  var hasil = [];


  for (var i = 0; i <= kata1.length - 1; i++) {
    numKata.push(dictionary.indexOf(kata1[i]));
  }

  urutNumKata = numKata.sort(function urutan(num1,num2) { return num1 > num2 })
  

  for(var i = 0; i <= urutNumKata.length - 1; i++) {
    hasil.push(dictionary[urutNumKata[i]]);
  }
  return hasil.join('');
}

console.log(urutkanAbjad1('hello')); // 'ehllo'
console.log(urutkanAbjad1('truncate')); // 'acenrttu'
console.log(urutkanAbjad1('developer')); // 'deeeloprv'
console.log(urutkanAbjad1('software')); // 'aeforstw'
console.log(urutkanAbjad1('aegis')); // 'aegis'