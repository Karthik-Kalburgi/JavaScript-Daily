const users = [
    {firstName: 'Karthik', lastName:'kalburgi',age:'23'},
    {firstName: 'Pavan', lastName:'Kalyan',age:'26'},
    {firstName: 'Sohail', lastName:'Lakshmweara',age:'21'},
    {firstName: 'abhishek', lastName:'Jadhav',age:'30'},
    {firstName: 'Raghavendra', lastName:'hubl',age:'23'},
    {firstName: 'Vatshya', lastName:'sheety',age:'27'},




];

// const output = users.map((x)=>
//     x.firstName + "," + x.age
// );
// console.log(output);

const output = users.filter((x)=>x.age<25).map((x)=>x.firstName);
console.log(output);
