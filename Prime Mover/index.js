function PrimeMover(num) { 
  
  // prime number theory says we can estimate that the nth prime number ~ nlogn
  let approxLim = num * Math.log2(num);
  let primes = sieve(approxLim);
  
  if (num===1) {
      return 2;
  }
  
  if (primes[num-1] !== undefined) { 
    return primes[num-1];
  } else {
    approxLim = num * (Math.log2(num) + Math.log2(Math.log2(num)));
    primes = sieve(approxLim);
    return primes[num];
  }

}


function sieve(limit) {
    let map = {};
    let primes = [];
    
    // using a map just for easier comprehension when revisiting, this way the keys correspond to the actual numbers
    // start with 2, go to limit, set everything equal to true
    for (let i=2; i<=limit; i ++) {
        map[i] = true;
    }
    
    // loop over every entry
    for (let i=2; i
