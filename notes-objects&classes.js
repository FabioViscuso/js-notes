/* OBJECTS */
/* The Object is another structured data type in JS */
/* It uses key:value pairs to define attributes and their values */
/* After each attribute, don't forget to add a comma (,) at the end of the line */

const sampleObject = {
    name: 'John',
    surname: 'Doe',
    age: 32,
    isEmployed: false,
    pets: [ /* array of objects, or 'nested objects' */
        {
            name: 'Ciri',
            race: 'Cat',
            age: 3,
        },
        {
            name: 'Lucky',
            race: 'Dog',
            age: 8,
        }
    ],
    car : {
        brand: 'Tesla',
        model: 'Model S',
    },
    favoriteFood: ['pasta', 'pizza', 'burger', 'taralli'],
}

/* How to access properties: dot notation... */
console.log(`My name is ${sampleObject.name} and ${sampleObject.isEmployed === true ? "I'm employed" : "I'm unemployed"}`);
/* ... or bracket notation, but remember to reference attributes as strings. Also, prefer dot notation when possible */
console.log(`My full name is ${sampleObject['name']} ${sampleObject['surname']}`)

/* If an attribute is an array, we can access properties via the usual arrays' bracket notation */
console.log(`I have a ${sampleObject.pets[0].race.toLowerCase()} named ${sampleObject.pets[0].name} of ${sampleObject.pets[0].age} years.`);

/* Access a directly nested object */
console.log(`Mr ${sampleObject.surname} also likes to drive a ${sampleObject.car.brand} ${sampleObject.car.model}`);




/* STUFF */