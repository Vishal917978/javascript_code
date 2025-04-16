

//power of a number

let num=5;
let power=4;
console.log(num**power)

//factor


function factor(){
let fact=[]
for(let i=1;i<num;i++){
    if(num%i==0){
        fact.push(i)
    }
}
return fact  
}


//prime factor

let num1=12;
let fact=[]
for(let i=1;i<num1;i++){
    if(num1%i==0){
        fact.push(i)
    }
}
console.log(fact)
let sum2=0;
for(let i=1;i<fact.length;i++){
    sum2=0;
 for(let j=1;j<i;j++){
     if(i%j==0){
         sum2=sum2+1;
     }
 }
 if(sum==1){
     console.log(i)
 }
}

// factorial

function fact1(rem){
fact=1;
for(let i=1;i<=rem;i++){
    fact=fact*i;
}
return fact

}

// //strong number

let number1 =145;
let dup=number1;
let sum1=0
while(number1>0){
    let rem=number1%10;
    sum1=sum1+fact1(rem);
    number1=parseInt(number1/10);
}
if(sum1==dup){
    console.log("strong ")
}


//perfect number

let num2=28;
let sum=0
for(let i=1;i<num2;i++){
    if(num2%i==0){
      sum+=i
    }
}
if(sum==num){
    console.log("perfect")
}else{
    console.log("not")
}

//perfect square

let number=25;
let count=0;
for(let i=1;i<number;i++){
  if(i**2==number){
      count++;
  }
}
if(count==1){
    console.log("perfect square")
}else{
    console.log("not ")
}
