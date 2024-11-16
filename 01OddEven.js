//Find the Odd and Even Numbers;

function OddEven(num){
return num%2==0 ? `The Number is Even ${num}` : `The Number is Odd${num}`
}

console.log(OddEven(2));
console.log(OddEven(13));
console.log(OddEven(-16));
console.log(OddEven(40));
console.log(OddEven(undefined));
