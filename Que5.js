//maximum and minimum digit of any number
let num=1238765;
let larg=0;
let min=100000;
while(num>0){
    let rem=num%10;
    if(rem>larg){
        larg=rem;
    }
    if(rem<min && num<min){
        min=rem
    }
    num=parseInt(num/10)
 }
//  console.log(larg)
//  console.log(min)
console.log("(",larg,",",min,")")