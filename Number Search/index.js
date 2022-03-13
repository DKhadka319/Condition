function NumberSearch(str) { 

  if (!str.match(/[0-9]/g)){return 0}
  var num = str.match(/[0-9]/g).reduce(function(a,b){return parseInt(a)+parseInt(b)})
  var div = str.match(/[a-z]/gi).length
  return Math.round(num/div) 
         
}
   
// keep this function call here 
NumberSearch(readline());
