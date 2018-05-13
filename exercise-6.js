// function hitungHuruf(kata) {
//   // you can only write your code here!
// }

// // TEST CASES
// console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
// console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau

var kata = 'Today, is the greatest day ever';
var kata1 = kata.split(' ');
var kataKecil = kata.toLowerCase().split(' ');

var modus = 0;
var modusFreq = 1;


for(var i = 0; i <= kataKecil.length - 1; i++) {
  var hurufModus = [];
  var kataModus = kataKecil[i];

  for (var j = 0; j <= kataModus.length - 1; j++) {
    for (var k = 0; k <= kataModus.length - 1; k++) {
      if (kataKecil[j] === kataKecil[k]) {
        
        if (modusFreq < modus) {
          modusFreq = modus;
             
        }
      }
    }
    modus = 0;
  }
}
console.log(kataKecil)
console.log(kataModus)



