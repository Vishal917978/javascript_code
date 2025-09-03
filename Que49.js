let arr=[1,2,0,45,221,0,78,0];
let result=[];

for(let i=0;i<=arr.length-1;i++){
    if(arr[i]!==0){
        result.push(arr[i])
    }
  
}
  while(result.length<arr.length){
        result.push(0);
    }
console.log(result);