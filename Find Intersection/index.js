function FindIntersection(strArr) { 

    var a = strArr[0].split(', ')
    var b = strArr[1].split(', ')
    var result = a.filter(x => b.find(a => a === x))
    return result.length > 0 ? result.join(',') : 'false'
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));