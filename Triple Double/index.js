function TripleDouble(num1,num2) { 
    var triples=[];
    var doubles=[];
    var match=false;
    num1=num1.toString();
    num2=num2.toString();
    for (i=0; i<num1.length; i++) {
        if (num1.charAt(i)===num1.charAt(i+1) && num1.charAt(i)===num1.charAt(i+2)) triples.push(num1.charAt(i));
    }
    for (j=0; j<num2.length; j++) {
        if (num2.charAt(j)===num2.charAt(j+1) && num2.charAt(j)!==num2.charAt(j-1)) doubles.push(num2.charAt(j));
    }
    for (k=0; k<triples.length; k++) {
        if (doubles.includes(triples[k])) match=true;
    }
    return match?1:0;
}
   
// keep this function call here 
TripleDouble(readline());
