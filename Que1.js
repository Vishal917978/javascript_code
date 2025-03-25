//how many element pair of  an array who's pair's sum is divisible by 2
let arr=[2,2,1,7,5,3];
let count=0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if((arr[i]+arr[j])%2==0){
            console.log("(",arr[i],arr[j],")")
            count++;
        }
    }
}
console.log(count)
