//num divisible by its digit's sum or not
let num=1234;
let copy=num;
let sum=0
while(num>0){
    let rem=num%10;
    sum=sum+rem;
    num=parseInt(num/10);
}
console.log("sum of the digit :",sum)
if(copy%sum==0){
    console.log("good number ")
}else{
    console.log("bad number")
}
