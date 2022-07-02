function BitwiseTwo(strArr) { 

  // code goes here  
  let a,b;
  [a,b]=strArr.map(n=>parseInt(n,2));
  
  return (a&b).toString(2);
         
}
   
// keep this function call here 
BitwiseTwo(readline());
