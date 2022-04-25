/* JSON AND RELATED METHODS */
/* JSON is a common text format used for exchanging data between clients and servers,
   even from different services from different companies */
/* A key difference between JSON and a JS object literal, is that the keys must
   ALWAYS be strings */

/* This is a common JS object literal */
const myObject = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
    sex: 'Male',
    ownedDogs: undefined, // undefined is ignored by JSON
    ownedCats: ['Lucky', 'Tommy', 'Althea'],
    fullName() {return `${this.firstName} + ${this.lastName}`;}, // methods are ignored as well
    job: 'Web developer',
    [Symbol('id')]: 123, // symbols are ignored
    car: {brand: 'Tesla', model: 'Model S'},
};

// We can manipulate elements and transform them into JSON
myObject.car.toJSON = function() {
    return `${myObject.sex == 'Male' ? 'Mr' : 'Mrs'} ${myObject.lastName}'s Car is a ${this.brand} ${this.model}`
};

const myNewJSON = JSON.stringify(myObject); 
/* .stringify() turns an object into a JSON string that can be called as a 
   JSON-encoded or serialized or stringified or marshalled object */
console.log(myNewJSON, typeof myNewJSON); // myObject is now considered a string

const newObject = JSON.parse(myNewJSON); // .parse() takes a stringified JSON and turns it into an object
console.log(newObject, typeof newObject); // newObject is now an object again


/* Another use case: deeper copy of an object */
/* This method DOES NOT preserve object methods by default, as seen above */
const copiedObject = JSON.parse(JSON.stringify(myObject));

/* In this way, we can modify the copied object and it won't impact the original one */
copiedObject.firstName = 'Jane';
copiedObject.sex = 'Female';
copiedObject.ownedCats[0] = 'Kim';
console.log(myObject.firstName, copiedObject.firstName);
console.log(myObject.ownedCats[0], copiedObject.ownedCats[0]);