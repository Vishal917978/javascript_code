//sum of first n numberrs
let n=8;
let sum=0;
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log(sum)


//sum of numbers between spacific limit
let sum1=0;
let a=10;
let b=20;
for(let i=a;i<=b;i++){
    sum1+=i;
}
console.log(sum1)


//which is greater
if(a>b){
    console.log("a  is greater")
}else{
    console.log("b is greater")
}


//positive and negative 
let number=-123;
if(number>0){
    console.log("positive");
}else{
    console.log("negative")
}


//odd even
if(number%2==0){
    console.log("number is even")
}else{
    console.log("odd numberr")
}



let c=23;
if(a>b && a>c){
    console.log("a is greatest");
}else if(b>a && b>c){
    console.log("b is greatest")
}else if(c>a && c>b){
    console.log(" c is greatest")
}