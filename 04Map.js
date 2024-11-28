const arr = [0,1,3,2,6];
function double(x){
    return x*2;
}

function triple(y){
    return y*3;
}
function binary(z){
    return z.toString(2);
}

//const output = arr.map(double);
const output = arr.map(binary);
//console.log(`The double numbers in array are ${output} `);
//console.log(`The tripple numbers in array are ${output} `);
console.log(`The binary numbers in array are ${output} `);
