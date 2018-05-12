function  kaliTerusRekursif(angka) {
  var angkaString = String(angka);
  var hasil = 0;
  var hasilBaru = 0;
  var hasilBaruLagi = 0;

  if (String(angka).length === 1) {
    hasil = Number(angkaString) 
    return hasil;
  }
  else {
    hasil = Number(angkaString[0]) * kaliTerusRekursif(Number(angkaString.slice(1))) 
    if (String(hasil).length === 1) { 
      return hasil;
    }
    else {
      hasilBaru = Number(String(hasil)[0]) * kaliTerusRekursif(Number(String(hasil).slice(1))) 
      if (String(hasilBaru).length === 1) { 
        return hasilBaru;
      }
      else {
        hasilBaruLagi = Number(String(hasilBaru)[0]) * kaliTerusRekursif(Number(String(hasilBaru).slice(1))) 
        return hasilBaruLagi; 
      }
    }
  }
  // you can only write your code here!
}