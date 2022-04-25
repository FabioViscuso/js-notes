/* ES6 FEATURES */
/* DESTRUCTURING */

/* Array destructuring */
/* Thanks to the array destructuring, we can take the elements we need
   from a given array and assign them to a number of variables */

/*  */ console.log('----- Array Destructuring w/implicit array & object -----'); /*  */

const dude = {};
/* no let/const */ [dude.firstName, /* empty */, dude.lastName] = 'John "Johnny" Doe'.split(' '); //.split() creates an array
let [/* empty */, nickname, /* empty */] = 'John "Johnny" Doe'.split(' ');
nickname = nickname.substring(1, nickname.length-1) // we remove the double quotes
console.log(nickname); // Johnny

console.log(dude); // dude has firstName and lastName
dude.nickname = nickname; // we add nickname to the dude object
console.log(dude); // dude now has firstName lastName and nickname


/*  */ console.log('----- Array Destructuring w/declared array & default param -----'); /*  */

function random() {
    return Math.floor(Math.random() * 10);
}
const luckyNumbers = [random(), random(), /* random() */]; 
// Toggle the last commented element to change the default value to a computed one
const [luckyNumber1, luckyNumber2, luckyNumber3 = 'no lucky number here'] = luckyNumbers; 
// luckyNumber3 uses a default value
console.log(luckyNumber1);
console.log(luckyNumber2);
console.log(luckyNumber3);




/* Object Destructuring */
/* A key difference over array destructuring, is that values are not positional */

/*  */ console.log('----- Object Destructuring -----'); /*  */

let age = 0;

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    /* hasCar: true, */ // Decomment these values to change default params
    /* job: "web developer", */
}

let {lastName, hasCar, firstName, job = 'Job data not available'} = person;

({age} = person); 
/* ^ to populate an existing variable with a destructured parameter's value,
   we need to use ( ) in our syntax */

console.log(`Name: ${firstName}`);
console.log(`Surname: ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Has a car? ${(hasCar) ? 'Yes' : 'No'}`);
console.log(`Job: ${job}`);



/*  */ console.log('----- Object Destructuring w/custom variable names -----'); /*  */

const guitarist = {
    firstName: "Jimi",
    lastName: "Hendrix",
    favoriteGuitar: {
        brand: "Fender",
        model: "Stratocaster",
        trivia: ["right-handed used as left-handed", "modified out of phase pickups"]
    }
}

let {firstName: guitaristName, lastName: guitaristLastName, favoriteGuitar: {trivia: funStuff} } = guitarist;

console.log(guitaristName);
console.log(guitaristLastName);
console.log(funStuff[0]);




/* Params destructuring */
/* Mostly used with object, can be thought as a method to pass in a function
   only the required properties, without having to pass the whole object */

/*  */ console.log('----- Params Destructuring w/Objects -----'); /*  */

function retirementEligibility ({lastName, age, yearsOfService, role}, salariesObj) {
    if (age > 64 && yearsOfService > 6 && salariesObj[role] > 2000) {
        return `Mr ${lastName} is eligible for retirement`;
    } else {
        return `Mr ${lastName} is not yet eligible for retirement`;
    }
}

const employee_john = {
    firstName: "John",
    lastName: "Doe",
    age: 65,
    yearsOfService: 14,
    role: "frontend developer",
    favFramework: "React",
}

const employee_chris = {
    firstName: "Chris",
    lastName: "Redfield",
    age: 34,
    yearsOfService: 7,
    role: "backend developer",
}

const salaries = {
    'frontend developer': 5000,
    'backend developer': 4500,
    'marketing manager': 2000,
    'ceo': 15000,
}

console.log(retirementEligibility(employee_john, salaries));
console.log(retirementEligibility(employee_chris, salaries));



/*  */ console.log('----- Params Destructuring w/Arrays -----'); /*  */

/* Of course it can be used with arrays, as a form of syntactic sugar */
const songs = [
    {title: 'song1', band: 'skaBand', duration: '3'}, 
    {title: 'song2', band: 'progBand', duration: '6'}, 
    {title: 'song3', band: 'progBand', duration: '10'},
    {title: 'song4', band: 'skaBand', duration: '2'}, 
    {title: 'song5', band: 'rockBand', duration: '4'}, 
    {title: 'song6', band: 'rockBand', duration: '2'},
]

const shortSongs = songs.filter( ({duration}) => duration < 4);
// this will filter out songs longer than 3 minutes but will preserve the objects

console.log(shortSongs.map( ({title, duration}) => `${title} is a short song of ${duration} minutes`));
// this will instead print verbose strings from the objects, but omitting the "band" prop



/* REST OPERATOR */
/* The rest operator allows us to include in a variable or parameter list 
   whatever goes 'beyond' the expected number of parameters.
   The excess parameters are put in an array */

/*  */ console.log('----- Rest operator w/arrays -----'); /*  */

const notes = ['2 + 2 is 4', 'sky is blue', 'we <3 JS', 'don\'t eat the yellow snow', 'drink water']
let [note1, note2, ...otherNotes] = notes;
// note that the rest operator must always be the last variable/argument

console.log(note1);
console.log(note2);
console.log(otherNotes);
console.log('otherNotes w/ spread operator')
console.log(...otherNotes);
/* Using the 'spread' syntax again, in a single variable, makes the 
   content 'explode' and being treated as a big sequence of strings in place
   of a series of array elements. See the difference in the log */


/*  */ console.log('----- Rest operator w/functions -----'); /*  */

function addNumbers (num1, num2, ...nums) {
    return num1 + num2 + nums.reduce( (total, number) => total += number );
}

console.log(addNumbers(1, 4, 0, 3, 5, -10, 0))



/* SET-TIMEOUT & SET-INTERVAL */
/* Set-timeout is an integrated function that makes it possible to
   run some code after some time, expresses in milliseconds */
/* It's important to note that setTimeout() is ASYNCHRONOUS and NON-BLOCKING */
/* PLEASE NOTE: setInterval and setTimeout timings can't be considered exact */

/*  */ console.log('----- setTimeout -----'); /*  */

function sayHello() {
    console.log('Hello!')
}

setTimeout(sayHello, 1000); // we need to pass the function, not the function calling
console.log('Hello again!');
/* Even if the second log comes after the first one with setTimeout,
   it will be shown first because it doesn't wait for setTimeout() */


/*  */ console.log('----- setTimeout w/inline function and params -----'); /*  */
setTimeout((greeting, name) => console.log(`${greeting}, ${name}!`), 3000, 'Hi', 'John')


/*  */ console.log('----- setInterval w/clearTimeout -----'); /*  */

function knocking (person) {
    console.log(`Toc toc, are you there ${person}?`);
}

let intervalID = setInterval(knocking, 2000, "Jimmy");
setTimeout (() => clearTimeout(intervalID), 8000);
/* clearTimeout takes a returned element from setInterval called interva ID
   and uses it to kill the interval after some time specified in milliseconds in another
   setTimeout */