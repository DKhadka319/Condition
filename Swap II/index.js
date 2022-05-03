function SwapII(str) { 
    for(var i=0; i<str.length; i++){
        if(str.charAt(i).toLowerCase()===str.charAt(i)){
            str= str.slice(0,i)+ str.charAt(i).toUpperCase()+ str.slice(i+1);            
        }
        else{
            str= str.slice(0,i)+ str.charAt(i).toLowerCase()+ str.slice(i+1);
        }
    }
    var re= /(\d)([a-z]+)(\d)/gi;
    
  // code goes here  
  return str.replace(re, "$3$2$1"); 
         
}
   
// keep this function call here 
SwapII(readline());
