function PalindromeTwo(str) { 
    str=str.replace(/[^a-z]/ig, "").toLowerCase();
    return str.split("").reverse().join("")===str;
}
   
// keep this function call here 
PalindromeTwo(readline());
