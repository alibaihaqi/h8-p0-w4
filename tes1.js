function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10], ['Baju Zoro', 500000, 2],['Sweater Uniklooh', 175000, 1]];
  var result = [];

  if (shoppers.length === 0) {
    return result;
  }
  else {
    for (var i = 0; i <= listBarang.length - 1; i++) {
      var pedagang = {};
      var leftOver = listBarang[i][2];
      var totalProfit = 0;
      pedagang.product = listBarang[i][0];
      pedagang.shoppers = [];

      for (var j = 0; j <= shoppers.length - 1; j++) {
        if (leftOver - shoppers[j].amount >= 0) {
          if (pedagang.product === shoppers[j].product) {
          pedagang.shoppers.push(shoppers[j].name);
          leftOver = leftOver - shoppers[j].amount;
          totalProfit = totalProfit + (shoppers[j].amount * listBarang[i][1]);
          }
        }
      }
      pedagang.leftOver = leftOver;
      pedagang.totalProfit = totalProfit;
      result.push(pedagang);
    }
  }
  return result;
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));