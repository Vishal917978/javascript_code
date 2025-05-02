//1...reverse an array

// let arr=[1,2,3,4,5];
// let dup=[];
// for(let i=arr.length-1;i>=0;i--){
//     dup.push(arr[i]);
// }
// console.log(dup)

//...2nd method
// let res=arr.slice().reverse();
// console.log(res)



//2...first half in asc and second half in dec...


// let arr=[1,2,3,4,5,6];
// let mid=parseInt(arr.length/2)
// console.log(mid)
// for(let i=0;i<mid;i++){
//     for(let j=i+1;j<mid;j++){
//         if(arr[j]>arr[i]){
//             let temp=arr[j];
//             arr[j]=arr[i];
//             arr[i]=temp;
//         }
//     }
// }
// for(let i=mid;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             let temp=arr[j];
//             arr[j]=arr[i];
//             arr[i]=temp;
//         }
//     }
// }
// console.log(arr)



//3..finding the freqency of an element in array

// let arr=[1,2,3,2,2,3,4,2];
// let count=0;
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         count++;
//     }
// }
// console.log(count);

