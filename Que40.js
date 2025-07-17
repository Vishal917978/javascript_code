//1.count of spacific number

// let arr=[1,2,3,4,5,2,3,4,2,2];
// let num=2;
// let count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         count++
//     }
// }
// console.log(count)

//2.prime number in array

// let arr=[1,2,3,5,4,6,7,8,13,9,17,19,21];
// let count=0;
// let dup=[];
// for(let i=0;i<arr.length;i++){
//     let count=0
//     for(let j=2;j<arr[i];j++){
//         if(arr[i]%j==0){
//             count++;
//         }
//     }
//     if(count==0 && arr[i]!=1){
//         dup.push(arr[i])
//     }
// }
// console.log(dup)

//3.replce each element with product of the other

// let arr=[1,2,3,4];
// let dup=[];
// for(let i=0;i<arr.length;i++){
//     let mul=1;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]!=arr[j]){
//         mul*=arr[j]
//     }
//     }
//     dup.push(mul)
// }
// console.log(dup)


//4.longest word in array of string

// let arr=["apple","banana","oraange","mango","lichi"];
// let len=0;
// let data=""
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length>len){
//         len=arr[i].length
//         data=arr[i]
//     }
    
// }
// console.log(data)


