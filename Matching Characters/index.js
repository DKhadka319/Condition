function MatchingCharacters(str) { 
  let max = 0;
  
  for (let i = 0; i < str.length - 1; i++) {
      let l = str.charAt(i);
      let j = str.lastIndexOf(l);
      
      if (j > i) {
        let unique = [];
        
        for (let k = i + 1; k < j; k++) {
            let char = str.charAt(k);
            if (unique.indexOf(char) == -1) {
                unique.push(char)
            }
        }
        
        if (unique.length > max)
            max = unique.length;
      }
  }
  
  // code goes here  
  return max; 
         
}
   
// keep this function call here 
MatchingCharacters(readline());
