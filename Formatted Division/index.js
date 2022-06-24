function FormattedDivision(num1,num2) { 
  var division = (num1/num2).toFixed(4);
  division = division.toString();
  var newString = "";

  count = -5;
  for (var i = division.length-1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0) {
      newString = newString + ",";
      }
    newString += division[i];
    count += 1;
    }
  finalString = "";
  for (var i = newString.length-1; i >= 0; i--) {
    finalString += newString[i]
  }
  return finalString
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FormattedDivision(readline());
