function OtherProducts(arr) { 

  var newArr = []
  
  for (i = 0; i < arr.length; i++) {
    var copy = arr.slice()
    copy.splice(i, 1)
    var product = copy.reduce((a, b) => a * b)
    newArr.push(product)
  }
  return newArr.join('-')
}
// keep this function call here 
OtherProducts(readline());


// Second method 
// function OtherProducts(arr) { 
//     var prod= [];
//     for(var i=0; i<arr.length; i++){
//         prod[i]=arr.reduce(function(a,b){return a*b})/arr[i];
//     }
//   // code goes here  
//   return prod.join().replace(/\,/g, "-"); 
         
// }
   
// // keep this function call here 
// OtherProducts(readline());
