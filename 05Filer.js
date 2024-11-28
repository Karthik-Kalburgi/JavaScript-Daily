const arr = [1,2,9,3,23,65,87,23,65,2,52,65,6,,59,2,65,623,64,6,26,4];



function isOdd(num){
    return num  >= 4;
}

const output = arr.filter(isOdd);
console.log(output);
