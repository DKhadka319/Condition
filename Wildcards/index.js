function Wildcards(str) { 
  const [pattern, word] = str.split(' ');
  let compare = ''
  // code goes here  + * {N}?
  //+ single char
  //* series of 3
  //{N} mutates * to series of length N; N > 1
  for (var i = 0; i < word.length; i++) {
    let current = word[i]
    let count = 1;
    if (current === word[i+1]) {
      while (current === word[i+1]) {
        count++
        i++
      }
      if (count !== 3) compare += `*{${count}}`
      if (count === 3) compare += '*'
    }
    if (count === 1 && isNaN(current)) compare += '+'
    if (count === 1 && !isNaN(current)) compare += '$'
  }
  return compare === pattern; 
}
   
// keep this function call here 
console.log(Wildcards(readline()));
