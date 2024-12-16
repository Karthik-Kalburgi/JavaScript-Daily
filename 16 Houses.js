let students = ["JazlynAinsworth","ROhaan","Karthik","KK","Sohail","Siva","prtk",
    "RocioSimmons",
    "Alaina", "Corley",
    "Brooks", "Hair",
    "AminaKnight",
    "Ross", "Wisniewski",
    "GalenOlson",
    "GwendolynBenavides",
    "Triston" ,"Rutherford",
    "BrettDay"];

    let houses= []
    for (const student of students) {
        if(student.length < 6){
            houses.push('Red')
        }else if(student.length <8){
            houses.push('Blue')

        }else if(student.length <12){
            houses.push('Green')
        }else{
           houses.push('purple')
        }
    }
    console.log(houses);
    