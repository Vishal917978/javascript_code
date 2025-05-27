let arr=[1,2,3,6,5];
arr.push(9);
console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift("vishal")
console.log(arr)

console.log(arr.slice(0,4));

// arr.splice(0,2)
// console.log(arr)

arr.sort((a,b)=>b-a)
console.log(arr)

console.log(arr.reverse())

let new1=[8,6,5,4];
console.log(arr.concat(new1))

let r=arr.join()
console.log(r)

let str=["vishal","sharma","mehidpur"]
let er=str.join("--")
console.log(er)


let res1=new1.indexOf(4)
console.log(res1)

let res2=new1.lastIndexOf(8)
console.log(res2)