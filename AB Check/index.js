function ABCheck(str) { 

  // code goes here 
  for (var i = 0; i< str.length-3; i++){
      if (str[i] === "a" && str[i+4] === "b" || str[i]==="b" && str[i+4] ==="a") {
          return true;
      }
  }
  return false; 
         
}
   
// keep this function call here 
ABCheck(readline());
