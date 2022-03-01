function TimeConvert(num) { 

  // code goes here  
  var h = Math.floor(num / 60);
  var m = num % 60 ;
  var s = h + ':' + m;
  return s; 
         
}
   
// keep this function call here 
TimeConvert(readline());
