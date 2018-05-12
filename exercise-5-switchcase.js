function ubahHuruf(kata) {
  // you can only write your code here!

  var kata1 = kata.split('');

  for (var i = 0; i <= kata1.length-1; i++) {
    switch (kata1[i]) {
      case 'a':
        kata1[i] = 'b';
      break;

      case 'b':
      kata1[i] = 'c';
      break;

      case 'c':
      kata1[i] = 'd';
      break;

      case 'd':
      kata1[i] = 'e';
      break;

      case 'e':
      kata1[i] = 'f';
      break;

      case 'f':
      kata1[i] = 'g';
      break;

      case 'g':
      kata1[i] = 'h';
      break;

      case 'h':
      kata1[i] = 'i';
      break;

      case 'i':
      kata1[i] = 'j';
      break;

      case 'j':
      kata1[i] = 'k';
      break;

      case 'k':
      kata1[i] = 'l';
      break;

      case 'l':
      kata1[i] = 'm';
      break;

      case 'm':
      kata1[i] = 'n';
      break;

      case 'n':
      kata1[i] = 'o';
      break;

      case 'o':
      kata1[i] = 'p';
      break;
    
      case 'p':
      kata1[i] = 'q';
      break;

      case 'q':
      kata1[i] = 'r';
      break;
    
      case 'r':
      kata1[i] = 's';
      break;

      case 's':
      kata1[i] = 't';
      break;

      case 't':
      kata1[i] = 'u';
      break;

      case 'u':
      kata1[i] = 'v';
      break;
    
      case 'v':
      kata1[i] = 'w';
      break;

      case 'w':
      kata1[i] = 'x';
      break;
    
      case 'x':
      kata1[i] = 'y';
      break;

      case 'y':
      kata1[i] = 'z';
      break;
  
      default:
      kata1[i] = 'a';
      break;
    }
  }
  return kata1.join('');
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu