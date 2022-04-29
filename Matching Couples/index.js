function MatchingCouples(arr) { 

  // code goes here  
  numBoys = arr[0];
  numGirls = arr[1];
  numOfEach = arr[2] / 2;

  let numCombos = numBoys * numGirls;
  for (let i = 1; i < numOfEach; i++) {
    numCombos *= (numBoys - i) * (numGirls - i) / (i + 1);
  }
  return numCombos;

}
   
// keep this function call here 
console.log(MatchingCouples(readline()));
