// menambahkan kata is_student = true"

const fs = require('fs');

let data = JSON.parse(fs.readFileSync('student.json', "utf-8"))

console.log(typeof data); // object

//---------------------------------------------------------------

// menambah satu-satuan

// data[0].is_student = true;

// output
// [
//   { name: 'Arriza', is_student: 
//   true },
//     { name: 'Delvin' },
//     { name: 'Hanif' },
//     { name: 'Rifaldi' }
//  ]

//---------------------------------------------------------------

// data.is_student = true;

// output
// [
//     { name: 'Arriza' }, 
//     { name: 'Delvin' }, 
//     { name: 'Hanif' },  
//     { name: 'Rifaldi' },
//     is_student: true    
// ]

//---------------------------------------------------------------

// data.push({'is_student': true});
// [
//     { name: 'Arriza' }, 
//     { name: 'Delvin' }, 
//     { name: 'Hanif' },  
//     { name: 'Rifaldi' },
//     { is_student: true }
// ]

//---------------------------------------------------------------

// menggunakan looping

// for (let i=0; i<data.length; i++) {
//     data[i].is_student = true
// }

//----------------------------------------------------------------

// bisa menggunakan cara map juga

// or using map
// what is ... ?
// e.g
// const obj = { name: 'Romi, age: 17}
// with ...
// {...obj, is_student: true } == {  name: 'Romi, age: 17, is_student:  }

//----------------------------------------------------------------

// data = data.map ( val => ({ 

//     ...val,
//     is_student: true

// }));

//----------------------------------------------------------------

console.log(data);

// fs.writeFileSync('result.json', JSON.stringify(data, null, 2));