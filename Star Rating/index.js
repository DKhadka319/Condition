function StarRating(str) { 

  // code goes here  
  var arr = [];
  var num = Number(str);
  
  for (var i = 0; i < 5; i++){
      if (num >= 0.75){
          arr.push('full');
      } 
      else if (num < 0.75 && num >= 0.25){
          arr.push('half');
      } 
      else {
          arr.push('empty');
      }
      num--;
  }
  return arr.join(' '); 
         
}
   
// keep this function call here 
StarRating(readline());
