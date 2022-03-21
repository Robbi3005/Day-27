const fs = require('fs');

// const data = fs.readFileSync('student.json');

// console.log(data);
// console.log('-------------------\n');

// output tanpa utf-8
{/* <Buffer 5b 0d 0a 7b 0d 0a 20 20 20 20 22 6e 61 6d 65 
22 3a 20 22 41 72 72 69 7a 61 22 0d 0a 7d 2c 0d 0a 7b 
0d 0a 20 20 20 20 22 6e 61 6d 65 22 3a 20 22 44 65 ... 
39 more bytes> */}

//------------------------------------------------------------------------

// utf-8 adalah encoding dari optional bahasa javascript

// const data1 = fs.readFileSync('student.json', 'utf-8');

// console.log(data1);
// console.log('-------------------\n');

// output dengan itf-8
// [
//     {
//         "name": "Arriza"
//     },
//     {
//         "name": "Delvin"
//     },
//     {
//         "name": "Hanif"
//     }
// ]

// console.log(typeof data1); // string
// console.log('-------------------\n');

//-----------------------------------------------------------------------

// data.push({'name': 'Rifaldi'});
// error, karena file sebelunya masih string, harus di jadikan object dulu

//-----------------------------------------------------------------------

const data = JSON.parse(fs.readFileSync('student.json', 'utf-8'));

data.push({ 'name': 'Rifaldi' });

console.log(data);
console.log('-------------------\n');

// output
// [
//     { name: 'Arriza' },
//     { name: 'Delvin' },
//     { name: 'Hanif' },
//     { name: 'Rifaldi' }
// ]

//------------------------------------------------------------------------

// untuk memasukan data baru pada file, kita harus menulis code lagi seperti ini

// stringify untuk menampilkan object setelah di run
// 2 ini untuk menambahkan spasi
fs.writeFileSync('student.json', JSON.stringify(data, null, 2));