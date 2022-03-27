function ArrayMinJumps(arr) { 

  // code goes here
  n = arr.length;
  if(n==1){return 0; };
  startnew = [0];
  steps = 0;
  while(steps<100){
    steps ++;
    start = startnew.slice();
    startnew = [];
    for(i of start){
      for (j=1; j<=arr[i]; j++){
        k = i+j;
        startnew.push(k);
        if(k>=n-1){return steps;};
      }
    }
  }  
  return -1; 

}
   
// keep this function call here 
console.log(ArrayMinJumps(readline()));
