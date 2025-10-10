let num=2;
let count=0;
for(let i=1;i<num;i++){
    if(num%i==0){
        count++
    }
}
if(count==1){
    console.log("prime")
}else{
    console.log("not prime")
}

let num=20;
for(let i=1;i<=20;i++){
    let count=0
    for(let j=1;j<i;j++){
        if(i%j==0){
            count++
    }
    }
    if(count==1){
        console.log(i)
    }
}

let num=6
let res=parseInt(num/2)*2==num
if(res){
    console.log("even")
}else{
    console.log("odd")
}