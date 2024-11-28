// console.log("HEy");
// console.log("Hey 2");


// setTimeout(function(){
//     console.log("Runned after 2 secound");
//     console.log("hey 3");
    
// },5000);
// console.log("Hey4");


// let ans =new Promise((res,rej)=>{
//     if(false){
//         return res();
//     }
//     else{
//         return rej();
//     }
// });

// ans.then(function(){
//     console.log("it has been resolved");
    
// })
// .catch(function(){
//     console.log("It has been rejected");
    
// });


// let ans  = new Promise((res,rej)=>{
//     let num = Math.floor(Math.random()*10);
//     console.log(num)
//     if(num<5){
//       return res();
//     }
//     else{
//       return rej();
//     }
//   });
  
//   ans.then(function(){
//     console.log(`below`);
//   })
//   .catch(function(){
//     console.log(`Above`);
//   });



async function abc(){
    let rawData = await fetch(`https://randomuser.me/api/`);
    let ans =await rawData.json();
    console.log(ans);
  } 


  abc();