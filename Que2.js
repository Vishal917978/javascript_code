//number of common character in two string
let str="helloWorlddetfo";
let str2="do";
let count=0;
for(let i=0;i<str2.length;i++){
    for(let j=0;j<str.length;j++){
        if(str2[i]==str[j]){
            count++;
        }
    }
}
console.log(count);