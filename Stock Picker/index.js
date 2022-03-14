function StockPicker(arr) { 
  var maxProf = 0;
  var profits = arr.map(function (currPrice, index) {
     return arr.slice(index, arr.length).sort(function(a, b) {return b-a;})[0] - currPrice;
  });
  maxProf = profits.sort(function(a,b) {return b-a;})[0];
  return (maxProf > 0) ? maxProf : -1;
}
StockPicker(readline());
