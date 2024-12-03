// //Dublicate Array 
// function Dublicate(arr){
//     return arr.concat(arr);
// }

// console.log(Dublicate([1,2,3,4,5]));

//write a function to reverse a number

// function ReverseNumber(num){
//    let ans = num.toString().split('').reverse()

//    console.log(ans);
   
// }

// console.log(ReverseNumber(1245));

function ReverseInteger(num){
    var rev =0;
    while(num>0){
        let rem = num%10;
        var rev = rev*10 +rem;
        num = Math.floor(num/10);   
    }
    return rev


}

console.log(ReverseInteger(123));

