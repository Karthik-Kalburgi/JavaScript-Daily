//Finding the smallest numbers

function SmallestNumber(a,b,c){
    return (a<b && a<c) ? `A is the Smallest ${a}` : (b<a && b<c) ?`B is the Smallest ${b}` : `C is the Smallest ${c}`    
}

console.log(SmallestNumber(1,2,3));
console.log(SmallestNumber(14,200,5));
console.log(SmallestNumber(10,20,30));
console.log(SmallestNumber(131,552,513));
console.log(SmallestNumber(631,212,323));
console.log(SmallestNumber(-31,212,-99323));
