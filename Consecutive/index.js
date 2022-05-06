function Consecutive(arr) { 
  arr.sort(function(a,b){return b-a});
  var diff=0;
  for(var i=1;i<arr.length;i++){
    diff+=(arr[i-1]-arr[i])-1
  }
  // code goes here  
  return diff; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Consecutive(readline());
