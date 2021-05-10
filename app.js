// REVIEW DATATYPES 

// PRIMATIVES: passed by value && unchangable

// STRINGS
// a set of characters, denoted with wrapping quotes "" '' `` 
var s1 = "Jim said \"hello's world\"";
var s2 = 'hello world ' + s1;
var s3 = `hello world ${s1} `;


// Numbers
// a number that a computer can compute + - * / %
// math obeys order of operation PEMDAS
var x = 7
var y = 8
var z = 2 * (x + y)


// BOOLEAN
var isTrue = !false 
var isFalse = !true 

// null undefined

// NON-PRIMATIVE REFERENCE TYPES
// Object is a single instance 
// everything is an object
 
var jake = {
    name: "Jake",
    age: 35,
    eyes:{
        left: {
            color: "brown",
            vision: "20/20",
            blind: false
        },
        right: {
            color: "brown",
            vision: "20/200",
            blind: true
        }
    }
}


if(jake.eyes.right.blind && jake.eyes.left.blind){
    console.log("JAKE IS BLIND")
}
if(jake.eyes.right.blind || jake.eyes.left.blind){
    console.log("JAKE IS BLIND in at least one eye")
}

// NOTE look this up elvis operator
jake.head?.eyes

// ARRAYS
// denoted with the square braces []
// Storing like items aka (objects)
// var plural = [singleInstance, singleInstance]
// var cats = [cat, cat]

var cats = [
    { name: "Garfield" },
    { name: "Felix" },
    { name: "Sylvester" }
]





// BONUS CONTENT dictionary more on these later
var pets = {
    cats: [],
    dogs: [{name: "fido"}],
    birds: [], 
    sneks: []
}

var fido = pets.dogs[0]
