function shoppingTime(memberId, money) {
  var belanja = {};

  function fungsiBelanja (money) {
    var sisaUang = money;
    var namaBelanjaan = [];
    var i = 0;
  
    if (sisaUang >= 1500000) {
      namaBelanjaan[i] = 'Sepatu Stacattu';
      sisaUang = sisaUang - 1500000;
      i++;
    }
    if (sisaUang >= 500000) {
      namaBelanjaan[i] = 'Baju Zoro';
      sisaUang = sisaUang - 500000;
      i++;
    }
    if (sisaUang >= 250000) {
      namaBelanjaan[i] = 'Baju H&N';
      sisaUang = sisaUang - 250000;
      i++;
    }
    if (sisaUang >= 175000) {
      namaBelanjaan[i] = 'Sweater Uniklooh';
      sisaUang = sisaUang - 175000;
      i++;
    }
    if (sisaUang >= 50000) {
      namaBelanjaan[i] = 'Casing Handphone';
      sisaUang = sisaUang - 50000;
      i++;
    }
    var gabungan = [namaBelanjaan, sisaUang];
    return gabungan;
  }

  var output = fungsiBelanja(money);

  if (memberId === '' || memberId === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  else {
    if (money < 50000) {
      return 'Mohon maaf, uang tidak cukup';
    }
    else {
      belanja.memberId = memberId;
      belanja.money = money;
      belanja.listedPurchased = output[0];
      belanja.changeMoney = output[1];
    }
  }
  return belanja;
  // you can only write your code here!
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
