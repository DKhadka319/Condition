function MaxSubarray(arr) { 
    var max = 0;
    for( var i = 0 ; i < arr.length ; i++ ){
        for( var j = i + 1 ; j <= arr.length ; j++ ){
            var temp = arr.slice(i,j);
            if( theTotal(temp ) > max ){
                max = theTotal(temp);
            }
            
        }
    }
    return max;
}

function theTotal(arr){
    return arr.reduce(function(acc, each ){
        return acc + each ;
    },0);
}
   
// keep this function call here 
MaxSubarray(readline());
