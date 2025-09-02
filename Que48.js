//1.largest,smallest,secLargest
// let arr=[1,2,3,14,5,6,0];
// let max=arr[0]
// let small=arr[0]
// let secMax=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<small){
//         small=arr[i]
//     }
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=max && arr[i]>secMax){
//         secMax=arr[i]
//     }
// }
// console.log("highest is : ",max)
// console.log("smallest is : ",small)
// console.log("second highest is : ",secMax)

//2.reverse array

// let arr=[1,2,3,4,8,6];
// let lst=arr.length;
// for(let i=0;i<arr.length;i++){
//     let temp=arr[i];
//     if(arr[i]<=arr[lst]){
//     arr[lst]=arr[i];
//     arr[i]=temp
//     lst++;
//     }
// }
// console.log(arr)

// let arr=[1,12,3,4,5,6];
// let count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<arr[i+1]){
//         count++
//     }
// }

// if(count==arr.length-1){
//     console.log("sorted")
// }else{
//     console.log("not")
// }