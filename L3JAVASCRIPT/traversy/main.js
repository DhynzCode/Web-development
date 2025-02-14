// console.log("hi");
// console.error('this is an error');
// console.warn ('this is warn');

// let x = 'geaser jan, gadinga , pajunar';
// console.log(x.split(','));

// ARRAYS - variable that hold multiple values

// const fruits = ['apples','oranges','pears'];
// fruits[3] ssss= 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();

// console.log(Array.isArray('oranges'))
// console.log(fruits.indexOf('oranges'))

// console.log(fruits);

// console.log(fruits(2));// check the element using index


// OBJECT

// const person = {
//     firstName: 'geaser jan',
//     lastName: 'Gadingan',
//     age:21,
//     hobbies: ['music', 'Movies', 'sports'],
//     address: {
//         street: 'Navarro court',
//         city: 'Zamboanga city',
//         country: 'philippines'
//     }
// }
// console.log(person.firstName,person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const { firstName,lastName,address{city} } = person;
// console.log(city);

// person.email = 'geas@gmail.com';

// console.log(person);


const todos = [
    {
        id:1,
        text: 'take out trash',
        isComplicated:true
    },
    {
        id:2,
        text: 'Meating with boss',
        isComplicated:true
    },
    {
        id:3,
        text: 'Dentist appt',
        isComplicated:false
    }
];

// // console.log(todos[1].isComplicated)

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

//for loop <---

// for(let i = 0; i < 10; i++){
//     console.log(`For loop Number: ${i}`);
// }

// while Loop
// let i = 0 ;
// while (i <10 ){
//     console.log(`while Loop Number: ${i}`)
//     i++;
// }

// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }


// for(let todo of todos){
//     console.log(todo.text);
// }

// forEach 
// const .forEach(function(todo){
//     console.log(todo.text)
// });

// MAP
// const todoText = todos.map(function(todo){
//     return todo.text;
// });

// console.log(todoText);

// FILTER
// const todoComplicated = todos.filter(function(todo){
//     return todo.isComplicated === true;
// });

// console.log(todoComplicated);