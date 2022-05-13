function FibonacciChecker(num) { 
var arr=[];
  var res;
  for(var i=0;;i++){
    arr.push(i<2 ? i:arr[i-2]+arr[i-1]);
    if(arr[i]===num){
      res='yes';
      break;
    } 
    if(arr[i]>num){
      res='no';
      break;
    } 
  } 
  // code goes here  
  return res; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FibonacciChecker(readline());
