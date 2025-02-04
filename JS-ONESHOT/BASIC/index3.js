let lastName = 'Babbar' ;
let firstName = new String('Love');

let message = 
`Hello ${lastName},

Thanks for the Opportunity

Regards,
Babbar`;

// console.log(message);
// Hello Babbar,

// Thanks for the Opportunity

// Regards,
// Babbar



let words = message.split(' ');
// console.log(words);
//      [
//         'Hello',
//         'Babbar,\n\nThanks',
//         'for',
//         'the',
//         'Opportunity\n\nRegards,\nBabbar'
//       ]




let date = new Date();
let date2 = new Date('June 20 1998 07:15');
let date3 = new Date(1998, 11, 20, 7);
// console.log(date); //2024-10-12T06:19:09.104Z
// console.log(date2); //  1998-06-20T01:45:00.000Z
// console.log(date3); //1998-12-20T01:30:00.000Z

date3.setFullYear(1947);
// console.log(date3);//1947-12-20T01:30:00.000Z

let Numbers = [1,4,5,7];

// console.log(Numbers); // [ 1, 4, 5, 7 ]

// to add an element

// //end -> push
// //beginning -> unshift
// //middle -> splice



// //Searching

// console.log(Numbers);//[ 1, 4, 5, 7 ]

// console.log(Numbers.indexOf(9));// -1

// //we want to check if a number exist in an array

// if(Numbers.indexOf(4) != -1) 
//     console.log("present");


// console.log(Numbers.includes(7)); // true

// console.log(Numbers.indexOf(4,2) ); // -1


let courses = [
    {no:1, naam:'Love'},
    {no:2, naam:'Rahul'}
];

// console.log(courses); // [ { no: 1, naam: 'Love' }, { no: 2, naam: 'Rahul' } ]

// console.log( courses.includes( {no:1, naam:'Love'} ) ); // false

let course =  courses.find(course => course.naam === 'Kilvish');
// console.log(course); // undefined

// function (course) {
//     return course.naam === 'Love';
// }

// console.log(course); 

let num = [1,2,3,4,5,6,7];

//end
num.pop();
//beginning
// console.log(num); // [ 1, 2, 3, 4, 5, 6 ]

num.shift();
// console.log(num); // [ 2, 3, 4, 5, 6 ]
//middle
num.splice(2, 1);
// console.log(num); // [ 2, 3, 5, 6 ]


let number = [1,2,3,4,5];
let numbers2 = number;


// to delete all element in an array any one out of 3 methode

// number = []; this is different and rest two work same in this only number is become null
// number.length = 0;// both become null
// number.splice(0,number.length);

// console.log(number);
// console.log(numbers2);

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// // console.log(combined); // [1, 2, 3 , 4 , 5, 6 ]

// let marks = [10,20,30,40,50,60,70,80];

// let sliced = marks.slice();
// console.log(sliced);
//     [
//         10, 20, 30, 40,
//         50, 60, 70, 80
//       ]


// let sliced = marks.slice(2);
// console.log(sliced);
// [ 30, 40, 50, 60, 70, 80 ]


// let sliced = marks.slice(2,6);
// console.log(sliced);
// // [ 30, 40, 50, 60 ]



let first = [1,2,3];
let second = [4,5,6];

let combined = [...first,'a', false, ...second ,'b', true];
// console.log(combined);// [ 1,2, 3, 'a',  false, 4, 5, 6, 'b', true  ]

// //copy kaise create karu

// let another = [...combined];

let arr = [10,20,30,40,50];

// for(let value of arr) {
//     console.log(value);
// //     10
// //    20
// //    40
// //    30
// //     50
// }

// arr.forEach(number=> console.log(number));

let numb = [10,20,30,40,50];
const joined = numb.join(' ');

// console.log(joined); // 10,20,30,40,50

let messag = 'This is my first message';
let parts = messag.split(' ');

// console.log(parts); // [ 'This', 'is', 'my', 'first', 'message' ]

let joine = parts.join('_');
// console.log(joine); // This_is_my_first_message


let numbe = [5,10,4,40];
numbe.sort();
// console.log(numbe); // [ 10, 4, 40, 5 ]

numbe.reverse();
// console.log(numbe); // [ 40, 4, 10, 5 ]


let numbers3 = [1,2,-1,-4];

let filtered =  numbers3.filter(value => value >= 0);// predicate is like a arrow fn

// console.log(filtered);// [ 1, 2 ]


let numbers7= [7,8,9,10];

// let items = numbers7.map(value => 'student_no' + value);

// console.log(items);// [ 'student_no7', 'student_no8', 'student_no9', 'student_no10' ]


let numbers6 = [1,2,-6,-9];

let item = numbers6
            .filter(value => value >= 0)
            .map(num =>  2+ num);

// console.log(item);//[3,4]