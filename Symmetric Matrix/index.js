function SymmetricMatrix(strArr) { 
  var matrix = [];
  var row = [];
  var i,j,x,y = 1;
  
  for(i = 0; i < strArr.length; i++){
    var val = strArr[i];
  
    if(val == '<>'){
      matrix.push(row);
      row = [];
      y++;
      if(!x){ x = i }
    } else {
      row.push(Number.parseInt(val));
    }
  }
  matrix.push(row);
  
  if(x != y){
    return "not possible";
  } else {
    for(i = 0; i < x; i++){
      for(j = 0; j <= i; j++){
        if(matrix[j][i] != matrix[i][j]){
          return "not symmetric";
        }
      }
    }
    return "symmetric";
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SymmetricMatrix(readline());
