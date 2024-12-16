//  const DOB = (date = new Date()) =>{
//     const day = date.getDay();
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     return `${day}/ ${month}/ ${year}`;
//  }

//  console.log(DOB());
 

const DOB = (date = new Date()) =>{
    const day = date.getDate() ;
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/ ${month}/ ${year}`;
}

console.log(DOB());
