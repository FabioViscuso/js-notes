/* ARRAYS */
/* The array is the first structured data type */
/* It's an ordered container of data, which can be mixed in JS (see below) */
/* Since it's ordered, every element in the array is accompanied by an INDEX */
/* Remember, the first index is always 0 */

let emptyArray = [];
let sampleArray = ['hello', 0, 'world', null, 42, '!'];
/* Indexes:           0     1     2      3     4   5   */

/* ACCESSING DATA */
/* We use the bracket notation */
console.log(sampleArray[0]); /* will output 'hello' */
console.log(sampleArray[3]); /* will output null */
console.log(sampleArray[sampleArray.length - 1]); /* will output the last element of the array, in this case '!' */
/* sampleArray has a length of 6 elements, but since the indexes start from 0, the maximum index will be 5 */
/* Hence the need, in general, to use length-1 to select the last element of an array */




/* CYCLE ARRAYS */
/* You can use any loop type, such as while and for */
/*  */ console.log('----- for loop Example -----'); /*  */
for (let i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
}

/* But you can also use forEach, which is commonly used with arrays */
/*  */ console.log('----- forEach Example -----'); /*  */
sampleArray.forEach(element => sampleArray[element] = 'POST');

/*  */ console.log('----- forEach Example with conditionals -----'); /*  */
sampleArray.forEach(element => {
    if (isNaN(element)) { /* Of course you can use conditionals */
        console.log(element);
    }
});




/* ARRAY METHODS */

let array = [313, 'home', 'burger', null, '0'];

/* REMOVE ELEMENTS */
array.pop(); /* Removes the last element */
array.shift() /* Removes the first element */

/* Important notes */
/* .pop() and .push() methods don't just eliminate the elements, but
since they're functions, they actually RETURN as a value the element they eliminate */
let popPushExample = ['hello', null, 232, 3];
let poppedValue = popPushExample.pop();
let shiftedValue = popPushExample.shift();
console.log(`The pop() value is ${poppedValue} and the shift() value is ${shiftedValue}`); /* It would print '3' and 'hello' */


/* ADD ELEMENTS */
array.push('pushExample'); /* Adds 'example' to the end */
array.unshift('unshiftExample'); /* Adds 'example' to the start */

/* IMPORTANT METHODS */
/* .splice() */
/* This method can be used for
    - eliminating 'n' elements from a given index
    - substitute parts of an array from a given index
    - add new elements from a given index, without any removal 
    ... all of this by modifying the original array */
const months = ['Jan', 'Feb', 'March', 'JIMMY', 'ADA', 'April'];
months.splice(3, 2); /* We remove JIMMY and ADA by removing 2 items from index 3 */
months.splice(months.length, 0, 'May', 'June', 'July'); /* We add more months from the end of the array */
console.log(months);

/* .slice() */
/* This method can be used to copy parts of an array without modifying it */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lessNumbers = numbers.slice(3,7);

/* .filter() */
/* This metod returns an array based on a condition */
const people = [
    {name: 'John', age: 17},
    {name: 'Jane', age: 27},
    {name: 'Jimmy', age: 12},
    {name: 'Linda', age: 9},
    {name: 'Louis', age: 35}
]

const adults = people.filter(element => element.age > 17);
console.log(adults);

/* OTHER METHODS */
/* MDN is a good resource, shift+rightClick to open the link 
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */