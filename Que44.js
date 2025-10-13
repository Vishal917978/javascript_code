//1.palindrom string

// let str="namaN";
// let rev=""
// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i]
// }
// if(str.toLowerCase===rev.toLowerCase){
//     console.log("palindrom string")
// }else{
//     console.log("not a palindrom")
// }

//2.first non repeating character

let str="geekforgeeks";
for(let i=0;i<str.length;i++){
    let count=0;
    for(let j=i+1;j<str.length;j++){
        if(str[i]==str[j]){
            count++;
        }
    }
    if(count==0){
        console.log(str[i]);
        break;
    }
}

//3.vowel count

// let str="vishal sharmiouewq";
// let vowels=['a','e','i','o','u']
// let vowelCount=0
// consonantCount=0
//     for(let i=0;i<str.length;i++){
//         if (vowels.includes(str[i])) {
//          vowelCount++;
//         } else {
//       consonantCount++;
//         }
// }
// console.log(vowelCount)
// console.log(consonantCount)















