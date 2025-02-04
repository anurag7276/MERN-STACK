// //function call or invoke
// // run();// running

// //  due to HOISTING concept call kahi se kar sakte hai 
// //function declaration
// // function run() {
// //     console.log('running');
// // }

// // // //Named function assignment

// // let stand = function walk() {
// //     console.log('walking');
// // };

// // //Anonymous function assignment

// // let stand2 = function() {
// //     console.log('walking');
// // };

// // stand(); // walking

// // let jump = stand;

// // jump();// walking

// // stand2(); // walking


// // function sum() {
// //     let total = 0;
// //     for(let value of arguments) 
// //         total = total + value;
// //     return total;
// // }

// // console.log(sum(1,2)); //3
// // console.log(sum(1));// 1
// // console.log(sum());//0
// // console.log(sum(1,2,4,3,4,5));//19

// //Rest Operator

// // function sum(num, value, ...args) {
// //     console.log(args);
// // }

// // sum(1,2,3,4,5,6); // [ 3, 4, 5, 6 ]


// //Default Parameters
// // function interest(p,r=6,y=9) {
// //     return p*r*y/100;
// // }

// //GETTER SETTER

// //getter -> access properties
// //setter -> change or mutate properties

// // console.log(interest(1000,undefined, 8)); // 480

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// // console.log(person);// { fName: 'Love', lName: 'Babbar', fullName: [Getter/Setter] }

// //issue - > read only

// // console.log(person.fullName); //Love Babbar


// try {
//     person.fullName = true;
// }
// catch (e) {
//     // alert(e);
//     // console.log(e); //Error: You have not sent a string
    
// }

// // {
// //     var a = 5;
// // }
// // console.log(a);

// // function walk() {
// //     var a = 5;
// // }

// // console.log(a);

// // for(var i = 0; i<10; i++) {

// // console.log(i);
// // }


// if(true) {
//     var a = 5;
// }

// console.log(a); //5

// function a() {
//     const ab  = 5;
// }
// const ab = 5;
// function b() {
//     const ab = 5;
// }

//sorting 
// let a = [10,5,4,25];

// a.sort(function(a,b) {
//     return a-b;
// });

// console.log(a);//[ 4, 5, 10, 25 ]

let arr = [-1,-2,-3,-4];
let total = 0;

for(let value of arr) 
    total = total + value;

// console.log(total); // -10


let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(totalSum); // -10
