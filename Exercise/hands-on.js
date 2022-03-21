// json2.js nama filenya di folder Romi

const todo = '{"title":"my todo","todos":[{"id":1,"title":"first todo","description":"pick up milk","completed":true,"date":1389878466730},{"id":2,"title":"second todo","description":"learn backbone","completed":false,"date_completed":null},{"id":3,"title":"third todo","description":"go for a run","completed":false,"date_completed":null}]}';

const obj = JSON.parse(todo);

// console.log(obj)
// console.log('-----------------\n');

// output

// {
//     title: 'my todo',
//     todos: [
//             {
//                 id: 1,
//                 title: 'first todo',
//                 description: 'pick up milk',
//                 completed: true,
//                 date: 1389878466730
//             },
//             {
//                 id: 2,
//                 title: 'second todo',
//                 description: 'learn backbone',
//                 completed: false,
//                 date_completed: null
//             },
//             {
//                 id: 3,
//                 title: 'third todo',
//                 description: 'go for a run',
//                 completed: false,
//                 date_completed: null
//             }
//         ]
// }


console.log(obj.title); // my todo
console.log('-----------------\n');

//------------------------------------------------------------------------

// console.log(obj.todos[2]);
// console.log('-----------------\n');

// // output
// // {
// //     id: 3,
// //     title: 'third todo',
// //     description: 'go for a run',
// //     completed: false,
// //     date_completed: null
// // }

//-------------------------------------------------------------------------

// console.log(obj.todos[2].id); // 3
// console.log('-----------------\n');

//-------------------------------------------------------------------------

// console.log(obj.todos[2].title); // third todo
// console.log('-----------------\n');

//-------------------------------------------------------------------------

// console.log(obj.todos[1].description); // learn backbone
// console.log('-----------------\n');

//-------------------------------------------------------------------------