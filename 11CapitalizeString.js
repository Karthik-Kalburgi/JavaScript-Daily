//function to capital the staring letter of the word

// function capital(str){
//     let allwords = str.split(' ').map(function(word){
//         return word.charAt(0).toUpperCase() + word.substring(1);
//     })
//     return allwords.join(' ');
// }

//console.log(capital('karthik bhai kaise ho'));


//function to create occurances in a word and count the lteer how many letters are repating

// function occ(str){
//     let occurances= {};
//     str.split('').forEach(element => {
//         if(occurances.hasOwnProperty(element) == false){
//                 occurances[element] =1
//         }else{
//             occurances[element]++;
//         }
//     });
//     return occurances;
// }
// console.log(occ('Karthik kalburgi'));


//write a funciton write a for loop and add all those numbers

// let arr = [1,2,3,4,5];
// var sum =0;
// function add(arr){
//     arr.forEach(element => {
//         sum = sum + element;
//     });
//     return sum
// }

// console.log(add(arr));


//write a function which consist of strings and number only add the numbers
// let arr =['karthik',45,'wecsdv',96,45,36,98,45,'kk','ldbs','cdjcbds',7,8,'v'];
// var sum=0;
// function addNum(arr){
//     let sum =0;

//     arr.forEach(function(element){
//             if(typeof element === 'number'){
//                 sum = sum +element;
//             }
//     })
//     return sum;
// }
// console.log(addNum(arr));


