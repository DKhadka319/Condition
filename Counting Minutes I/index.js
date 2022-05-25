
1
function CountingMinutesI(str) { 

    let times = str.split('-');
    
    times = times.map(function(currentValue, index, array){
        let pairs = currentValue.split(':');
        let time = ((pairs[1][2] === 'a') ? parseInt(pairs[0]) % 12 : parseInt(pairs[0]) % 12 + 12) * 60 + parseInt(pairs[1][0] + pairs[1][1]);
        return time;
    });
   
   let diff = times[1] - times[0];
   return (diff < 0) ? diff + 1440 : diff;
}
   
// keep this function call here 
CountingMinutesI(readline());
