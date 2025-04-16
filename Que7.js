let str="ninja"
let str1="digital";
let newStr=str.concat(str1);
let dup=[];
for(let i=0;i<str.length;i++){
    let isdup=false
    for(let j=i+1;j<str1.length;j++){
        if(str[i]!=str1[j]){
          isdup=true;
        }
    }
    if(isdup){
        dup.push(str[i])
    }
}
console.log(dup)