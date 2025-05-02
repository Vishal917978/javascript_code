
function largest(arr){
    let large=arr[0];
 for(let i=1;i<arr.length;i++){
     if(arr[i]>large){
         large=arr[i]
     }
 }
 return large; 
 }
 
 function smallest(arr){
    let small=arr[0];
 for(let i=1;i<arr.length;i++){
     if(arr[i]<small){
         small=arr[i]
     }
 }
 return small
 }
 let arr=[7,21,3,4,5]
 let lar=largest(arr);
 let small=smallest(arr);
 console.log("largest is:",lar);
 console.log("smallest is:",small);
 
 let second_large=arr[0];
 for(let i=0;i<arr.length;i++){
     if(arr[i]!=largest(arr) && arr[i]>second_large){
         second_large=arr[i]
     }
 }
 console.log("second large:",second_large)
 
 
 let second_small=arr[0];
 for(let i=0;i<arr.length;i++){
     if(second_small!=smallest(arr) && second_small>arr[i]){
         second_small=arr[i];
     }
 }
 console.log(second_small);