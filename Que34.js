// let arr=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)


//2 que

// let arr=[1,2,4,5,34,23,76,45]
// let large=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>large){
//       large=arr[i];
//     }
// }
// console.log(large)

//3

// let arr=[43,65,33,21,16,32];
// let small=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<small){
//         small=arr[i]
//     }
// }
// console.log(small)


//4

// let arr=[1,4,3,2,6,5];
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr)

//5
// let arr=[1,4,3,2,6,5];
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr)




//6


// let arr=[1,2,1,4,5,2,7,4,3,3];
// let dup=[];
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//             break
//         }
//     }
//     if(count>0 && !dup.includes(arr[i])){
//         dup.push(arr[i])
//     }
// }
// console.log(dup)

//7


// let arr=[1,2,3,4,5,6,7,2,3,2]
// let value=2
//   let count=0
// for(let i=0;i<arr.length;i++){
//     count=0;
//     if(arr[i]==value){
//       count++;
//     }
// }
// if(count>0){
//     console.log("yes")
// }