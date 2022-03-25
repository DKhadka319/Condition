function ArrayCouples(arr) { 
  const pairs = {};

  for (let i = 0; i < arr.length - 1; i += 2) {
    const int1 = arr[i];
    const int2 = arr[i + 1];

    if (pairs[int1 + '_' + int2]) {
      pairs[int1 + '_' + int2]++;
    } else {
      pairs[int1 + '_' + int2] = 1;
    }
  }

  let unmatched = [];

  for (let i = 0; i < arr.length - 1; i += 2) {
    const int1 = arr[i];
    const int2 = arr[i + 1];

    if (!pairs[int2 + '_' + int1]) {
      unmatched.push(int1, int2);
    } else if (int1 === int2) {
      if (pairs[int2 + '_' + int1] < 2) {
        unmatched.push(int1, int2);
      } else {
      pairs[int2 + '_' + int1]-=2;
      }
    } else {
      pairs[int2 + '_' + int1]--;
    }
  }
  
  return unmatched.length ? unmatched.join(",") : "yes"; 
}
   
// keep this function call here 
console.log(ArrayCouples(readline()));
