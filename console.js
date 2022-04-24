const array = ['hello', NaN, 32, 'errrror', true];
const object = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
}

function timer() {
    setTimeout(2000);
    console.alert('2 seconds have now passed'); // logs as a warning (yellow)
}

console.time(); // starts logging the time. It's silent
console.log(array, object); // you can chain multiple loggings with a comma
console.error(`${array.filter(element => element === 'errrror')} in array`); // logs as an error (red)
console.table(array); // logs in a bigger but more readable tabular format
console.table(object);
console.dir(object);
console.trace(object);
console.timeEnd(); // finishes logging and return the passed time
