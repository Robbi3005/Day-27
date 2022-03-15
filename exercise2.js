// menambahkan kata is_student = true"

const fs = require ('fs');

let data = JSON.parse(fs.readFileSync('student2.json', "utf-8"))

console.log (typeof data); // object

//----------------------------------------------------------------

// bisa menggunakan cara map juga

// or using map
// what is ... ?
// e.g
// const obj = { name: 'Romi, age: 17}
// with ...
// {...obj, is_student: true } == {  name: 'Romi, age: 17, is_student:  }

//----------------------------------------------------------------

data = data.map ( val => ({ 

    ...val,
    is_student: true

}));

//----------------------------------------------------------------

console.log(data);

fs.writeFileSync('result2.json', JSON.stringify(data, null, 2));