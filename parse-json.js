// ini bentuk JSON dalam type string

const jsonStr = '{"name":{"firstName": "John", "lasName": "Doe"}, "address":"senayan", "favouriteColors": ["blue","red"]}';

console.log(typeof jsonStr); // string

//----------------------------------------------------------------------

// untuk membuat json string menjadi json object
const jsonObj = JSON.parse(jsonStr);

console.log(json.name);

//-----------------------------------------------------------------------

// untuk mengakses clors di dalam object
console.log(jsonObj.favouriteColors[0]);

// mengubah isi dari object
jsonObj.age = 24;

//----------------------------------------------------------------------

// mengubah bentuk json menjadi string lagi
console.log(jsonObj);

const jsonObjToText = JSON.stringify(jsonObj);

console.log(jsonObjToText);