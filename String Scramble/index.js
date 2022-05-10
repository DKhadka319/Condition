function StringScramble(str1,str2) { 
var word = str2.split('');
  var mix = str1.split('');
  var cnt = 0;
  outer:
  for(var i=0;i<word.length;i++){
    inner:
    for(var j=0;j<mix.length;j++){
      if(word[i]==mix[j]){
        cnt+=1;
        mix.splice(j, 1);
        break inner;
      } 
    } 
    if(cnt==0){
      break outer;
    } 
  } 
        
  // code goes here  
  return cnt==word.length ? true:false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());
