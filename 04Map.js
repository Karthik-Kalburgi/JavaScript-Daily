// const arr = [0,1,3,2,6];
// function double(x){
//     return x*2;
// }

// function triple(y){
//     return y*3;
// }
// function binary(z){
//     return z.toString(2);
// }

//const output = arr.map(double);
// const output = arr.map(binary);
//console.log(`The double numbers in array are ${output} `);
//console.log(`The tripple numbers in array are ${output} `);
// console.log(`The binary numbers in array are ${output} `);


// Double the values 
// const arr = [1, 2, 3, 4];

// const output = arr.map((x)=>x*2);
// console.log(output);

// Question: Write a function toUpperCaseArray that takes an array of strings and returns a new array where each string is converted to uppercase using the map() function.
// const arr =["apple", "banana", "cherry"];
// function toUpperCaseArray(arr){
//      return arr.map((x)=>x.toUpperCase());

    
// }

// console.log(toUpperCaseArray(arr));


// createPersonObjects that combines the two arrays into an array of objects. Each object should contain a name and age property.

// const names = ["Alice", "Bob", "Charlie"];
// const ages = [25, 30, 35];

// function personObject(name,age){
//     return names.map((name,index)=>({
//         name:name,
//         age:ages[index]
//     }));
// }

// console.log(personObject(names,ages));


// Question: Write a function squareRootsOfPositives that takes an array of numbers and returns a new array with the square roots of the positive numbers. If a number is negative, it should be ignored.
// const arr =[1, 4, 9, -16, 25];
// function squareRootsOfPositives(arr){
//     return arr.map(num=>num>0? Math.sqrt(num):null).filter(num=>num!==null);

// }
// console.log(squareRootsOfPositives(arr));
