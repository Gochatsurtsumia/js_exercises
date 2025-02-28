function fors(arr,funqcia){
    if (!Array.isArray(arr)){
        throw new Error("ar aris array")
    }
    if (typeof funqcia!== 'function'){
        throw new Error("ar aris funqcia")
    }
    for (let i =0;i<arr.length;i++){
        funqcia(arr[i],i,arr)
    }
}
const arr = [1, 2, 3];

fors(arr, function(item, i, array) {
    console.log(item, i,array);
});

// #### Task 2
// Create your own implementation of function `filter`, logic and behavior should be the same as original method.
// Function should contain checks:
// - First parameter required and has to be only array
// - Second parameter required and has to be only function
// javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});

const arr = [1,2,3];
function filter(arr,funqcia){
    if (!Array.isArray(arr)){
        throw new Error("firts parameter has to be array")
    }if (typeof funqcia!=="function"){
        throw new Error("second parameter has to be function")
    }
    let array1=[];
    for (let i=0;i<arr.length;i++){
        if (funqcia(arr[i],i,arr)){
            array1.push(arr[i])
        }
        }
    return array1;
}
filter(arr, function(item, i, arr) {});

// Create your own implementation of function `every`, logic and behavior should be the same as original method.
// Function should contain checks:
// - First parameter required and has to be only array
// - Second parameter required and has to be only function
// javascript

const arr = [1,2,3];
function every(arr,funqcia){
    if (!Array.isArray(arr)){
        throw new Error("not an array")
    }if (typeof funqcia!=="function"){
        throw new Error("not a function")
    }
    for (let i=0;i<arr.length;i++){
        if(!funqcia(arr[i],i,arr)){
            return false
        }
    }
    return true
}
every(arr, function(item, i, arr) {});

// Create your own implementation of function `some`, logic and behavior should be the same as original method.

// - Function should contain checks:
//   - First parameter required and has to be only array
//   - Second parameter required and has to be only function

const arr = [1,2,3];
function some(arr,funqcia){
    if (!Array.isArray(arr)){
        throw new Error("not an array")
    }if (typeof funqcia!=="function"){
        throw new Error("not a function")
    }
    for (let i=0;i<arr.length;i++){
        if (funqcia(arr[i],i,arr)){
            return true
        }
    }
    return false
    
}
some(arr, function(item, i, arr) {});

// Create your own implementation of function `reduce`, logic and behavior should be the same as original method.
// - Function should contain checks:
//   - First parameter required and has to be only array
//   - Second parameter required and has to be only function
//   - Third parameter required and has to be only string or number
const arr = [1,2,3];
let acc = 0;
function reduce(arr,funqcia,acc){
    if (!Array.isArray(arr)){
        throw new Error("not an array")
    }if (typeof funqcia!=="function"){
        throw new Error("not a function")
    }
    if (typeof acc !== 'string' && typeof acc!=='number'){
        throw new Error("string or number")
    }
    for (let i=0;i<arr.length;i++){
        acc=funqcia(acc,arr[i],i,arr)
    }
    return acc
}
reduce(arr, function(acc, item, i, arr) {}, acc);

// Create your own implementation of function `reduceRight`, logic and behavior should be the same as original method.

// - Function should contain checks:
//   - First parameter required and has to be only array
//   - Second parameter required and has to be only function
//   - Third parameter required and has to be only string or number

let arr = [1,2,3];
let acc = 0;
function reduceRight(arr,funqcia,acc){
    if (!Array.isArray(arr)){
        throw new Error("not an array")
    }if (typeof funqcia!=="function"){
        throw new Error("not a function")
    }
    if (typeof acc !== 'string' && typeof acc!=='number'){
        throw new Error("string or number")
    }
    for (let i=arr.length-1;i>=0;i--){
        acc=funqcia(acc,arr[i],i,arr)
    }
    return acc
}
reduceRight(arr, function(acc, item, i, arr) {}, acc);
//
var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = arr.map(x => x.length);

console.log(arrLength); // Output: [4, 5, 2, 3]

// Create function `arrayFill`, that will fill array with provided value. First parameter - value, second parameter - length of your array.
// Function should contain next checks:
// - First parameter required and has to be only number, string, object array
// - Second parameter required and has to be only number
// arrayFill('x',5); // [x,x,x,x,x]
function arrayFill(x,number){
    if (typeof number !== "number"){
        throw new Error("it isn't number")
    }if (typeof x!== 'string' && typeof x!=='number' ){
        throw new Error("it isn't string number or object array")
    }
    let array=[];
    for (let i=0;i<number;i++){
        array.push(x)
    }
}
// Create function `f`. This function gets one parameter: one dimensional or multidimensional array. This function returns the sum of all elements from all dimensions.

// Note that the function should return the 0, if during the calculation of all levels (dimensions) no number was found.

// Function should contain next checks:

// - First parameter required and has to be only array
// - Throw error if on any dimension (level) you found not a number or not a array
function f(arr){
    if (!Array.isArray(arr)){
        throw new Error("its not array")
    }
    let sum=0;
    for (let i=0;i<arr.length;i++){
        if (Array.isArray(arr[i])){
            sum+=f(arr[i])
        }else if (typeof arr[i] !== 'number') {
            throw new Error('Not a number ');
        } else {
            sum += arr[i]; 
        }
    }
    return sum;
    }
// Create function `reverse`, that gets array as parameter and returns array in opposite order.

// Function should contain next checks:

// - First parameter required and has to be only array
// - Throw error if passed empty array
// - Creating new array is not allowed
// - Using Array.reverse is not allowed

function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("argument must be an array");
    }
    if (arr.length === 0) {
        throw new Error("array cannot be empty");
    }
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }return arr;
}

function rotate(arr, number, direction = 'right') {
    if (!Array.isArray(arr)) {
        throw new Error("It's not an array");
    }if (typeof number !== 'number') {
        throw new Error("It's not a number");
    }if (typeof direction !== 'string') {
        throw new Error("Direction must be a string");
    }
    let length = arr.length;
    if (direction === 'left') {
        for (let i = 0; i < number; i++) {
            let first = arr.shift();
            arr.push(first);
        }
    } else {
        for (let i = 0; i < number; i++) {
            let last = arr.pop();
            arr.unshift(last);
        }
    }return arr;
}


function mix(...funqciebi) {
    for (let i = 0; i < funqciebi.length; i++) {
        if (typeof funqciebi[i] !== 'function') {
            throw new Error("All parameters must be functions");
        }
    }
    let result;
    for (let funqcia of funqciebi) {
        result = funqcia(result);
    }
    return result;
}
function mix(...funqciebi) {
    let result;
    let errors = [];

    funqciebi.forEach((funqcia, index) => {
        if (typeof funqcia !== 'function') {
            throw new TypeError('All arguments must be functions');
        }
        try {
            result = result === undefined ? funqcia() : funqcia(result);
        } catch (error) {
            errors.push({
                name: error.name,
                message: error.message,
                stack: error.stack,
                level: index
            });
        }
    });return { errors, value: result };
}

function compose(...functions) {
    if (functions.length === 0) {
        throw new Error('functions must not be empty');
    }
    return function(funqcia) {
        while (functions.length !== 0) {
            const gamosadzaxebeli = functions.pop();
            if (gamosadzaxebeli.constructor !== Function) {
                throw new TypeError('all functions must be functions');
            }
            funqcia = gamosadzaxebeli(funqcia);
        }return funqcia;
    };
}