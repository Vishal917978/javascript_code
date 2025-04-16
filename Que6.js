//first and last occorence of any character in string
let str="vishal sharma";
// let a=str.indexOf('a')
// let b=str.lastIndexOf('a')
// console.log(a,b)
let firstInd=0;
let lastInd=0;
let char='a'
for(let i=0;i<str.length;i++){
    if(str[i]==char){
        firstInd=i;
        break
    }
}
for(let i=str.length;i>=0;i--){
    if(str[i]==char){
        lastInd=i
        break
    }
}
console.log(firstInd)
console.log(lastInd)