const prompt = require("prompt-sync")();

/* OBJECTS */
/* The Object is another structured data type in JS */
/* It uses key:value pairs to define properties and their values */
/* After each property, don't forget to add a comma (,) at the end of the line */

let bestNumber = 90; /* This will be used in the sampleObject, see below */

const sampleObject = {
    name: 'John',
    surname: 'Doe',
    age: 32,
    isEmployed: false,
    car : { /* a nested object */
        brand: 'Tesla',
        model: 'Model S',
    },
    pets: [ /* array of nested objects */
    {
        name: 'Ciri',
        race: 'Cat',
        age: 3,
    },
    {
        name: 'Lucky',
        race: 'Dog',
        age: 8,
    }],
    favoriteFood: ['pasta', 'pizza', 'burger', 'taralli'],
    luckyNumber : [bestNumber], 
    /* ^ We can reference an external variable in an object's properties or values */
    /* In this example, we're accessing the variable bestNumber declared at line 6 
       and copying its value in luckyNumber */

    es6sampleMethod () {
        return 'stuff';
    },

    sampleMethod: function() {
        console.log(`My name is ${sampleObject.name} and ${sampleObject.isEmployed === true ? "I'm employed" : "I'm unemployed"}`);
    }
    /* ^ Functions declared in an object are called METHODS */
}


/* HOW TO ACCESS PROPERTIES: dot notation... */
console.log(`My name is ${sampleObject.name} and ${sampleObject.isEmployed === true ? "I'm employed" : "I'm unemployed"}`);
/* ... or bracket notation, but remember to reference properties as strings. 
   Also, prefer dot notation whenever possible */
console.log(`My full name is ${sampleObject['name']} ${sampleObject['surname']}`)

/* If a property is an array, we can access its content via the usual array's bracket notation */
console.log(`I have a ${sampleObject.pets[0].race.toLowerCase()} named ${sampleObject.pets[0].name}, ${sampleObject.pets[0].age} years old.`);

/* Access a directly nested object and its properties */
console.log(`Mr ${sampleObject.surname} also likes to drive a ${sampleObject.car.brand} ${sampleObject.car.model}`);

console.log(`My lucky number is ${sampleObject.luckyNumber}`);

/* This one prints the same thing  */
sampleObject.sampleMethod();




/* THE 'IN' KEYWORD */

if ('surname' in sampleObject) {
    console.log(`${sampleObject.surname} is such a generic surname...`);
}

sampleObject.guitar = {brand : 'Fender', model: 'Stratocaster'};
if ('guitar' in sampleObject) {
    console.log(`Nice ${sampleObject.guitar.model}!`);
} else {
    console.log(`Sorry, no such property.`)
}

let properties = [];
for (let property in sampleObject) {
    properties.push(property);
}
console.log(properties);


/* CREATE NEW OBJECTS */

/* Passing by Value */

const sampleObject2 = Object.assign({}, sampleObject);

sampleObject2.name = 'Jane';

console.log(sampleObject.name); /* Sill 'John' */
console.log(sampleObject2.name); /* She's Jane instead */

sampleObject.pets[0].name = 'Cicciola';
console.log(sampleObject.pets[0].name);
console.log(sampleObject2.pets[0].name);

sampleObject.favoriteFood.push('Ananas');
console.log(sampleObject.favoriteFood);
console.log(sampleObject2.favoriteFood);

/* By Constructor */

function Guitarist(name, surname, age, notableStuff, guitars, method, isDead) { /* When defining a constructor, we use the first capital letter in its name */
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.notableStuff = notableStuff;
    this.guitars = guitars;
    this.isDead = isDead;
    this.fullName  = function () {
        return `Hi! My name is ${this.name} ${this.surname}. I'm ${this.age} years old.`;
    }
    this.deadPerson = method;
}

/* You can pass a whole function to a constructor as a parameter. 
   It will become a method in the new object */
function deadPerson () {
    if (this.isDead) {
        return `Sorry, ${this.name} is dead...`;
    } else {
        return `Nice! ${this.name} is alive!`;
    }
};


const Jimi = new Guitarist('Jimi', 'Hendrix', 27, ['afro hair', 'big smile'], 
                        [{brand: 'Fender', model: 'Stratocaster'}, {brand: 'Gibson', model: 'Les Paul'}],
                        deadPerson, /* Here we reference to the deadPerson function without executing it. No '()' */
                        true
                        );

console.log(Jimi);

console.log(Jimi.fullName());

console.log(Jimi.deadPerson());

const Eric = new Guitarist('Eric', 'Clapton', 70, ['glasses', 'slow hands'], 
                        [{brand: 'Fender', model: 'Stratocaster'}, {brand: 'Fender', model: 'Stratocaster'},
                        null, /* This time I don't want to pass a 'method' parameter, I  */
                        false]
                        );

Eric.guitars[1].model = 'Telecaster';
console.log(Eric.guitars[1].model);
console.log(Jimi.guitars[1].model);

/* OPTIONAL CHAINING */

console.log(Jimi.guitars[0]?.strings?.gauge);
console.log(Jimi.guitars[0]?.brand);

