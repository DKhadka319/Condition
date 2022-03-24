function LongestMatrixPath(strArr) { 
  const memo = {};
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const ymax = strArr.length;
  const xmax = strArr[0].length;

  const dfs = (arr,x,y,memo) => {
    let max = 0;
    let key = x.toString()+y.toString();
    if(key in memo) return memo[key];
    for(const dir of dirs){
      let newx = x + dir[0];
      let newy = y + dir[1];
      if(newx >= xmax || newx < 0 || newy >= ymax || newy < 0) continue;
      if(arr[newy][newx] <= arr[y][x]) continue;

      let len = 1 + dfs(arr, newx, newy, memo);
      max = Math.max(max, len);
    }
    memo[key] = max;
    return max;
  }

  let max = 0;
  for(let i=0; i<ymax; i++){
    for(let j=0; j<xmax; j++){
      let len = dfs(strArr, j, i, memo);
      max = Math.max(max, len);
    }
  }
  // code goes here  
  return max; 

}
   
// keep this function call here 
console.log(LongestMatrixPath(readline()));
