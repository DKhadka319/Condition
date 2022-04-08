function LookSaySequence(num) {   
  var saidNum = ''
  var numbers = num.toString().match(/([0-9])\1*/g);
  for (var i = 0; i < numbers.length; i++) {
    var len = numbers[i].length;
    var value = numbers[i][0];
    saidNum += len + value
  }
  return Number(saidNum)
}
   
// keep this function call here 
LookSaySequence(readline());
