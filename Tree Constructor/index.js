function TreeConstructor(strArr) { 

    // code goes here
    childs = new Map();
    parents = [];
    
    for (i=0; i<strArr.length; i++) {
      pair = strArr[i].substring(1, strArr[i].length - 1).split(',').map(e => parseInt(e));
      if (!childs.get(pair[1])) {
        childs.set(pair[1], [pair[0]]);
      } else {
        c = childs.get(pair[1])
        if (c.length >= 2) 
          return false;
        c.push(pair[0]);
      }
  
      if (!parents.includes(pair[0]))
        parents.push(pair[0])
      else 
        return false
    }
    //console.log(childs)
    return true; 
  
  }
     
  // keep this function call here 
  console.log(TreeConstructor(readline()));