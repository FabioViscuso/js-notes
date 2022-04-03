const prompt = require("prompt-sync")();

/* FUNCTIONS */
/* To their core, functions are just reusable chunks of code */
/* A good function usually carries out a single task, no matter the required lines of code */
/* We then call the function at some point in our code, feeding it data if needed */

/* FUNCTION DECLARATION */
/* The function declaration is the standard way for creating functions */

console.log(funcDeclarExample("Fabio", 29)); 
/* ^ It can be called before the actual declaration */
/* That's because of a process called HOISTING, where a function declaration is
    automatically moved on top of the code */

function funcDeclarExample(name = "Mario", age = -1) {
    /* Remember: you can initialize the arguments ^ */
    return `Hello ${name}, you are ${age} years old.`;
    /* And the RETURN keyword will return the value. Any code written after that, won't run */
    console.log(name); /* <- for example, this won't run */
}

console.log(funcDeclarExample("Giacomo"));
/* This time it will use 'age' parameter's default value */




/* FUNCTION EXPRESSION */
/* A function is essentially a value, so it can also be assigned to a variable or a constant */

const funcExprssExample = function (num1 = 0, num2 = 0) {
    /* Initializing arguments adds complexity, but might be safer ^ */
    return `The sum of ${num1} and ${num2} is ${num1 + num2}`;
}; /* <- note: the semicolon is mandatory in function expressions */

console.log(funcExprssExample(10, 4));
/* Function expressions are not hoisted, and can only be called AFTER their declaration */




/* CALLBACKS */
/* A function called inside another function, passed as an argument */
/* This way, we pass not the computed value of a function, but the whole code and functionality */

/* Our callback */
function callbackExample(name) {
    console.log(`Hello ${name}`);
}

/* A second callback, just for demo */
function callbackExample2(name) {
    console.log(`Fuck you, ${name}!`);
}

function callbackPrompt(func) {
    let pippo = 'John';
    func(pippo); /* Here callbackExample is referenced as 'callback' parameter */
}

callbackPrompt(callbackExample); 
/* Here we call the prompt function, passing callbackExample as a parameter */

callbackPrompt(callbackExample2);
/* This time we pass the insult function */




/* ARROW FUNCTIONS */
/* A more concise way to declare functions. ES6+ */
/* Uses a syntax like [let/const] [name] = (parameters) => {instructions} */

const arrowFuncExample = (param1, param2) => {
    if (param1 % param2 === 0) {
        return `${param1} can be divided by ${param2}`;
    } else {
        return `${param1} can't be divided by ${param2}`;
    }
};

console.log(arrowFuncExample(5, 10));

/* Notes */
/* You can omit parenthesis if 
    - you only accept one argument:  par1 => {code...};
    - the function only has one statement. Also you can omit the 'return' keyword
      par1 => par1 * 10;
*/




/* SCOPE */
/* We can define the 'scope' of a variable as its lifespan */
/* In particular, a variabile will only 'live' inside the block of code it's declared within */

/* Note: let and const have the same block-level scope behavior */
let letScopeExample = 'Hello';
scopeExampleFunction();

function scopeExampleFunction () {
    let letScopeExample = 14; 
    /* ^ Redeclaring a variable inside a smaller scope is called SHADOWING */
    console.log(`letScopeExample inside scopeExampleFunction: ${letScopeExample}`); 
    /* This one will output 14, because it will reference the letScopeExample inside the function */
    
    function innerScope() {
        let letScopeExample2 = 'Inner scope reporting for duty';
        console.log(letScopeExample2);
        console.log(`letScopeExample inside innerScope(): ${letScopeExample}`); 
        /* This one works: nested scopes can 'see' the outer variables */
    }
    innerScope();
    /* console.log(letScopeExample2); decomment this if you want to test */
    /* This will throw an error: letScopeExample2 is not defined outside of innerScope() */
}

console.log(`letScopeExample after scopeExampleFunction: ${letScopeExample}`); 
/* This will output 'Hello', referencing the first letScopeExample */


/* The infamous 'var'. Try to never use it */
var varScopeExample = 31;

varScopeFunc();
function varScopeFunc() {
    var varScopeExample = 'hi';
    console.log(varScopeExample);
}

console.log(varScopeExample);