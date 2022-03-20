function PermutationStep(num) {
  var arr = num.toString().split("");
  var len = arr.length;
  var a; 
  var b;
  var temp;
  
  for (var i = len-1; i >= 0; i--) {
    a = arr[i];
    b = arr[i-1];
    if (a > b) {
      arr[i] = b;
      arr[i-1] = a;
      temp = arr.splice(i, len-1).sort();
      return arr.concat(temp).join("");
    }
  }
  return -1;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PermutationStep(readline());
