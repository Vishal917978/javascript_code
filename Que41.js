//1.remove duplicate data 

// let arr=[1,2,3,2,4,5,3,1,6]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//           arr.splice(j,1)
//           j--
//         }
//     }
// }
// console.log(arr)

//2.missing number in consecutive array

// let arr=[1,2,4,5,6];
// let count=0
// for(let i=arr[0];i<arr[arr.length-1];i++){
//  if(!arr.includes(i)){
//      console.log(i)
//  }
// }


//3.string to charArray

// let str="vishal"
// let ar=Array.from(str)
// console.log(ar)
// console.log([...str])


//4 second largest

// let arr=[1,2,32,4,5];
// let large=arr[0]
// let second_large=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>large){
//       large=arr[i]
//   }
// }
// console.log("largest",large)
// for(let j=0;j<arr.length;j++){
//     if(arr[j]>second_large && arr[j]!=large){
//         second_large=arr[j]
//     }
// }
// console.log("second_large",second_large)







