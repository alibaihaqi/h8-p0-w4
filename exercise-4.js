function cariModus(arr) {
  var modusfrequent = 1;
  var modus = 0;
  var angkam = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i; j < arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        modus = modus + 1;
        if (modusfrequent < modus) {
          modusfrequent = modus;
          angkam = arr[i];
        }
        if (modusfrequent === modus) {
          angkam = arr[i];
        }
      }
      else {
        angkam = -1;
      }
    }
    modus = 0;
  } 
  return angkam;
  // you can only write your code here!
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1