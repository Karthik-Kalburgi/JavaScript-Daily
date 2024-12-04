//function to capital the staring letter of the word

// function capital(str){
//     let allwords = str.split(' ').map(function(word){
//         return word.charAt(0).toUpperCase() + word.substring(1);
//     })
//     return allwords.join(' ');
// }

//console.log(capital('karthik bhai kaise ho'));


//function to create occurances in a word and count the lteer how many letters are repating

function occ(str){
    let occurances= {};
    str.split('').forEach(element => {
        if(occurances.hasOwnProperty(element) == false){
                occurances[element] =1
        }else{
            occurances[element]++;
        }
    });
    return occurances;
}
console.log(occ('Karthik kalburgi'));
