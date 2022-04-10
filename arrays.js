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
/* You can use any loop tipe, such as while and for */
for (let i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
}

/* But you can also use forEach, which is commonly used with arrays */
sampleArray.forEach(element => {
    console.log(element);
});

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
array.push('example'); /* Adds 'example' to the end */
array.unshift('example'); /* Adds 'example' to the start */