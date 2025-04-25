//1...number of digits

// let digit=1234;
// let sum=0
// while(digit>0){
//     let rem=digit%10;
//     sum+=1;
//     digit=parseInt(digit/10);
// }
// console.log(sum)


//2... factorial using recursion


// function factorial(n) {
//   if (n === 0) {
//     return 1; // base case
//   }
//   return n * factorial(n - 1); // recursive call
// }

// console.log(factorial(4)); // Output: 120


//3...prime number using recursion

// function prime(n,divisor=2){
//     if(n<2){
//         return false;
//     }
//     if(divisor>Math.sqrt(n)){
//         return true
//     }
//     if(n%divisor==0){
//         return false;
//     }
//     return prime(n,divisor+1)
// }
// console.log(prime(9))


//4...largest in array

// let arr=[1,2,3,4,5]
// let large=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         large=arr[i]
//     }
// }
// console.log(large)
