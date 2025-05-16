//1...hoistedvarible 

// hoistedVariable=3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable;
// a=10;
// console.log(a);
// var a;



//2...duplicate variable

// let arr=[1,2,3,2,4,1,4];
// let dup=[];
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++;
//         }
//     }
//     if(count>0){
//         dup.push(arr[i]);
//     }
// }
// console.log(dup)