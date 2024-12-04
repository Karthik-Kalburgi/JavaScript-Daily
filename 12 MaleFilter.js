//write a function stating that  how many people are male 


let arr = [
    {name:'Karthik' , Gender : 'male'},
    {name:'Karthika' , Gender : 'female'},
    {name:'ashwmin' , Gender : 'male'},
    {name:'abhi' , Gender : 'male'},
    {name:'gouri' , Gender : 'female'},
    {name:'kk' , Gender : 'male'},
    {name:'megg' , Gender : 'female'},
]

function gender(arr){
    let ans  = arr.filter(function(e){
        return e.Gender === 'male'
    })
    return ans;
}
console.log(gender(arr));
