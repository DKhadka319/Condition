function SeatingStudents(arr) { 

    // code goes here  
    
    if(arr.length <1) return -1;
    
    //Number of valid pairs
    var count=0;
    
    //Number of students; first number in the array
    var n=arr[0];
    
    //Now remove the first number from the array so we only have
    arr.splice(0,1);
    
    //For each seat
    for(var i=1; i<n; i++){
        
        //Skip seats that are already assigned
        if(arr.includes(i)) continue;
        
        //If i is even (it's on the right side)
        if(0 === i%2){
            
            //Check the seat below; if it's free, that's a valid pair
            if( (i+2)<=n && !arr.includes(i+2)) count++;
        
            //Otherwise, it's odd and on the left side
        } else {
            
            //Check the seat to the right; if it's free, that's a valid pair
            if( (i+1)<=n && !arr.includes(i+1)) count++;
            
            //Check the seat below; if it's free, that's a valid pair
            if( (i+2)<=n && !arr.includes(i+2)) count++;

        }
    }
    
    //Return the number of results found
    return count; 
         
}
   
// keep this function call here 
SeatingStudents(readline());