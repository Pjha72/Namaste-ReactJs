// ** Arrow Function **

function x(){
    const a = 10;
}
var xyz = 30;


// Data Structure to store data is memory heap.

x();  // functional execution context is created.

// anonymous function
var x = function (){
    console.log("I am anonymous function");
}

function test(x){
    return function (){

    }
}

// How to create a arrow function
// In ES6 
const fn = () =>{
    console.log("I am arrow function");
}

console.log(this); // window object

const obj = {
    fn: function (){
        console.log(this);
    },
    fn1: () =>{
        console.log(this);
    },
}
// Whenever we write a this keyword inside a normal function
// it will refer to the object which is calling the 
// function.
obj.fn(); // object 

// Whenever we write a this keyword inside a arrow function
// it will refer to the parent of the object which
// is calling the function.
obj.fn1(); // window object

// Window is a global object in browser environment.

// Home Work : Revise Namaste JavaScript

// Another Example
function x(){
    console.log(this);
    function y(){
        console.log(this);
        function z(){
            console.log(this);
        }
        z(); // window object
    }
    y(); // window object
}
x(); // window object

// Example -3
const person = {
    name : "Pawan",
    print : function p(){
        console.log(this);
    }
};
const person1 = {
    name : "Rahul"
};

p.call(this); // window object
p.call(person); // person object
p.call(person1); // person1 object

person.print(); // person object
person.print.call(); // window object
person.print.call(this); // window object
person.print.call(person1); // person1 object
person.print.call(person); // person object


// **Play With Arrow Function**
const obj = {
    name : "Pawan",
    print : () => {
        console.log(this);
    },
    print1 : function (){
        console.log(this);
    }
};

const obj1 = {
    firstName : "Rahul",

};

obj.print(); // window object
obj.print1(); // obj object

obj.print.call();
obj.print1.call();

// ** Interviews Tips**
/**
 * 
 * Most Compaines don't train their interviewers.
 * 
 * A person can be a good Software Enginner but a
 * bad interviewer.
 * 
 * Luck - Can't control
 * 
 * Can control - Our Preparation 
 *  -(50%) technical skills -> 5/5 days
 *      - everyone knows
 *  -(50%) communication skills -> 0/5 days
 *      - speak your thoughts while you code
 *         - practice to speak even when you're coding alone
 *      - If you can't explain, then interviewer things
 *          don't know
 *      - You don't work alone in the company
 *          - compaines expect you to have good 
 *             communication skills
 *       - It's a btutal truth, you should know english
 * 
 *  - mocks interviews
 * 
 *  - Preparation on the interview day
 *     - you should not be hustling at last moment
 *     - pen/paper ready
 *     - Charger
 *     - water bottle
 *     - keep your camera open
 *     - keep your phone on slient
 *     - router UPS
 *     - 
 *  
 * - CONFIFENCE COMES FROM PREPARATION
 *  (not just your technical prep)
 */
