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

Create your own implementation of function `some`, logic and behavior should be the same as original method.

- Function should contain checks:
  - First parameter required and has to be only array
  - Second parameter required and has to be only function

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

