/* OBJECTS */
/* The Object is another structured data type in JS */
/* It uses key:value pairs to define attributes and their values */
/* After each attribute, don't forget to add a comma (,) at the end of the line */

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
    /* ^ We can reference an external variable in an object's attributes or values */
    /* In this example, we're accessing the variable bestNumber declared at line 6 
       and copying its value in luckyNumber */


    sampleMethod: function () {

    }
    /* ^ Functions declared in an object are called METHODS */
}


/* How to access properties: dot notation... */
console.log(`My name is ${sampleObject.name} and ${sampleObject.isEmployed === true ? "I'm employed" : "I'm unemployed"}`);
/* ... or bracket notation, but remember to reference attributes as strings. 
   Also, prefer dot notation whenever possible */
console.log(`My full name is ${sampleObject['name']} ${sampleObject['surname']}`)

/* If an attribute is an array, we can access properties via the usual array's bracket notation */
console.log(`I have a ${sampleObject.pets[0].race.toLowerCase()} named ${sampleObject.pets[0].name}, ${sampleObject.pets[0].age} years old.`);

/* Access a directly nested object */
console.log(`Mr ${sampleObject.surname} also likes to drive a ${sampleObject.car.brand} ${sampleObject.car.model}`);

console.log(`My lucky number is ${sampleObject.luckyNumber}`);




/* STUFF */