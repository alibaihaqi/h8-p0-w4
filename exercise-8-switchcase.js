function urutkanAbjad(str) {
  var str1 = str.split('');
  var numkata = [];
  var katabaru = [];
  
  for (var i = 0; i <= str1.length-1; i++) {
    switch (str1[i]) {
      case 'a':
      numkata.push(1);
      break;
    
      case 'b':
      numkata.push(2);
      break;
    
      case 'c':
      numkata.push(3);
      break;
    
      case 'd':
      numkata.push(4);
      break;
    
      case 'e':
      numkata.push(5);
      break;
    
      case 'f':
      numkata.push(6);
      break;
    
      case 'g':
      numkata.push(7);
      break;
    
      case 'h':
      numkata.push(8);
      break;
    
      case 'i':
      numkata.push(9);
      break;
    
      case 'j':
      numkata.push(10);
      break;
    
      case 'k':
      numkata.push(11);
      break;
    
      case 'l':
      numkata.push(12);
      break;
    
      case 'm':
      numkata.push(13);
      break;
    
      case 'n':
      numkata.push(14);
      break;
    
      case 'o':
      numkata.push(15);
      break;
    
      case 'p':
      numkata.push(16);
      break;
    
      case 'q':
      numkata.push(17);
      break;
    
      case 'r':
      numkata.push(18);
      break;
    
      case 's':
      numkata.push(19);
      break;
    
      case 't':
      numkata.push(20);
      break;
    
      case 'u':
      numkata.push(21);
      break;
    
      case 'v':
      numkata.push(22);
      break;
    
      case 'w':
      numkata.push(23);
      break;
    
      case 'x':
      numkata.push(24);
      break;
    
      case 'y':
      numkata.push(25);
      break;
    
      default:
      numkata.push(26);
      break;
    }
  }
  
  numkata = numkata.sort(function urutan(angka1, angka2) { return angka1 > angka2 });
  
  for (var j = 0; j <= numkata.length - 1; j++) {
    switch (numkata[j]) {
      case 1:
      katabaru.push('a');
      break;
    
      case 2:
      katabaru.push('b');
      break;
    
      case 3:
      katabaru.push('c');
      break;
    
      case 4:
      katabaru.push('d');
      break;
    
      case 5:
      katabaru.push('e');
      break;
    
      case 6:
      katabaru.push('f');
      break;
    
      case 7:
      katabaru.push('g');
      break;
    
      case 8:
      katabaru.push('h');
      break;
    
      case 9:
      katabaru.push('i');
      break;
    
      case 10:
      katabaru.push('j');
      break;
    
      case 11:
      katabaru.push('k');
      break;
    
      case 12:
      katabaru.push('l');
      break;
    
      case 13:
      katabaru.push('m');
      break;
    
      case 14:
      katabaru.push('n');
      break;
    
      case 15:
      katabaru.push('o');
      break;
    
      case 16:
      katabaru.push('p');
      break;
    
      case 17:
      katabaru.push('q');
      break;
    
      case 18:
      katabaru.push('r');
      break;
    
      case 19:
      katabaru.push('s');
      break;
    
      case 20:
      katabaru.push('t');
      break;
    
      case 21:
      katabaru.push('u');
      break;
    
      case 22:
      katabaru.push('v');
      break;
    
      case 23:
      katabaru.push('w');
      break;
    
      case 24:
      katabaru.push('x');
      break;
    
      case 25:
      katabaru.push('y');
      break;
    
      default:
      katabaru.push('z');
      break;  
    }
  }
  return katabaru.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'