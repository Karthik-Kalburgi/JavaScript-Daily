//Reverse the string 

//let str =[1,8,6,5,85,46,23,7]
//Expected Output is ouY era woH kihtraK

//we can use arr split .reverse .join

// let reverseStr = str.split(' ').reverse().join(' ');

// console.log(reverseStr);


//Secound Method Using For Loop


// function ReverseString(str){
//     let result ='';
//     for(let i=str.length-1;i>=0; i--){
//         result = result + str[i];

        
        
//     }
//     return result;
// }

// console.log(ReverseString("Karthik Kalburgi"));


//python program to check paildrome

//     function paildrome(str){
//     let reverse = str.split('').reverse().join('');
//     if(str === reverse){
//         return true;
//     }else{
//         return false;
//     }
//    // console.log(reverse);
    
// }

// console.log(paildrome("abbaa"));
// console.log(paildrome("abba"));


//Write a function to write the strings in alphabetical order

function alphabetical(str){
    return ans  = str.split('').sort();

}

console.log(alphabetical('apple'));
