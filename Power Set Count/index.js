function PowerSetCount(arr) { 
  var output = 1;
  if (arr.length === 0) {
    output;
  } else {
    arr.forEach(function(num) {
      output *= 2;
    });
  }
  return output;
}
   
// keep this function call here 
PowerSetCount(readline());
