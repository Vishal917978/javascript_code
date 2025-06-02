//1... obje create update delete and add new properties

// let obj={
//     name:"vishal",
//     age:21,
//     marks:90
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// obj.grade="A";
// console.log(obj)

// obj.marks=88;
// delete(obj.age);
// console.log(obj)

//2...heighest salary from the above and key and value(using for in loop)

// let obj={
//     john:2000,
//     boby:4000,
//     tom:3000
// }
// let max=0;
// let topErn="";
// for(let per in obj){
//     if(obj[per]>max){
//         max=obj[per];
//         topErn=per;
//     }
// }

// for(let per in obj){
//     console.log(`values is ${obj[per]}, and key is ${per}`)
// }
// console.log(`${topErn}:${max}`)

//3...passing object as a parameter



// function demo(obj){
//     console.log(obj.name);
//     console.log(obj.type);
//     console.log(obj.price)
// }
// let obj={
//     name:"sohanpapadi",
//     type:"sweet",
//     price:400
// }
// demo(obj)

//4...nested object destructuring

// let obj={
//     id:101,
//     name:"sara",
//     address:{
//         city:"mumbai",
//         zip:40023
//     }
// }

// console.log(`${obj.name} lives in ${obj.address.city}`)