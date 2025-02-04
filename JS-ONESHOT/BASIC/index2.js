//object create
let rectangle = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};

//factory function 

function createRectangle(len, bre) {

    const rectangle = {
        length: len,
        breadth:bre ,
        draw() {
            console.log('drawing rectangle');
        }
    };
    return rectangle;
}

let rectangleObj1 = createRectangle(5, 4);
// console.log(rectangleObj1); // { length: 5, breadth: 4, draw: [Function: draw] }

let rectangle2 = createRectangle(2,3);
let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudents

//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define
function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw= function() {
        console.log('drawing');
    }
}

//object creation using constrcutor function
let rectangleObject = new Rectangle(4,6);

rectangleObject.color = 'yellow';
// console.log(rectangleObject);
// output is:-
// Rectangle {
//         length: 4,
//         breadth: 6,
//         draw: [Function (anonymous)],
//         color: 'yellow'
//       }


delete rectangleObject.color;
// console.log(rectangleObject); // Rectangle { length: 4, breadth: 6, draw: [Function (anonymous)] }
// function assignment

let Rectangle1 = new Function(
    'length', 'breadth',
`this.length = length;
this.breadth = breadth;
this.draw= function() {
    console.log('drawing');
}`); 

// //object creation using Rectangle1
let rect = new Rectangle1(2,3);

rect.length;

// console.log(rect);


rectangle.length;
rectangle.breadth;

rectangle.draw();

let rectangle1 = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};


let rectangle2 = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};


let a = 10;
let b = a;

a++;
// console.log(a);//11
// console.log(b);//10


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value); //11
// console.log(b.value);// 11

// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);//10

// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);//11

// let rectangle = {
//     length:2,
//     breadth:4
// };

//for-in loop => is used to iterate over object 

for(let key in rectangle ) {
    //keys are reflected through key variable 
    //values are reflected through rectangle[key]
    console.log(key,rectangle[key]); 
    //length 2 
    //  breadth 4
}

// for-of loop
for(let key of Object.entries(rectangle)) {
    console.log(key);

    // [ 'length', 2 ]
    // [ 'breadth', 4 ]
}

if('length' in rectangle) {
    console.log('Present');
}
else {
    console.log('Absent');
}
//Present

//object - colone #1


let src = {
    a:10,
    b:20,
    c:30
};

let dest = {};

for(let key in src) {
    dest[key] = src[key];
}

// // console.log(dest);// { a: 10, b: 20, c: 30 }

src.a++;
//  console.log(dest); // { a: 10, b: 20, c: 30 }
                 
// console.log(src); // { a: 11, b: 20, c: 30 }

//Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// // console.log(dest); //{ a: 10, b: 20, c: 30, value: 25 }

// src.a++;

// console.log(dest);//{ a: 10, b: 20, c: 30, value: 25 }

//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);//{ a: 10, b: 20, c: 30 }

// src.a++;

// console.log(dest);//{ a: 10, b: 20, c: 30 }
