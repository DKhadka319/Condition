function TrappingWater(arr) {
  let area = 0;
  for (let i = 1, m = Math.max(...arr); i < m + 1; i ++) {
    for (let i2 = 0, gate = false; i2 < arr.length; i2 ++) {
      let freeSpace = arr[i2] < i;
      
      if (!freeSpace)
        gate = true;
      else if (gate)
        area ++;
    }
  }
  return area;
}

// keep this function call here 
console.log(TrappingWater(readline()));
