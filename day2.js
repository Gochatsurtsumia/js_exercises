//Write function `f` that return a cube of a number. The number is passed as a parameter. This function checks for input parameter, function can accept only a number.
var number=2;
function f(x){
    try{
        if (typeof x==="number"){
           return(x**3)
    }else{
            throw new Error("Error: parameter type is not a Number");
    }
   }catch(error){
       console.error(error.message)
        
    }
}
console.log(f(number))

//Write function `f` that returns the sum of all parameters. The list of parameters can be any. This function has to validate input parameters, because function can accept only numbers.


var arr=[1,1,1,1,1,1,"s",1]
function f (arr){
    let sum=0;
    try{
        for (var i=0;i<arr.length;i++){
            if (typeof arr[i]==="number"){
                sum+=arr[i]
            }
            else{
                throw new Error("Error: all parameters type should be a Number")
            }
        }
        return sum
    }
    catch(error){
        console.error(error.message)
    }
}
console.log(f(arr))
//Write function `f` that takes a parameter from 1 to 7, and returns the day of the week in Georgian. This function has to validate the input parameter, function can accept only a number from 1 to 7.

var day=0;
function f(day){
    try{
        if (typeof day==="number" && day===1){
            return ("Sunday")
        }
        else if (typeof day==="number" && day===2){
            return ("Monday")
        }
        else if (typeof day==="number" && day===3){
            return ("Tuesday")
        }
        else if (typeof day==="number" && day===4){
            return ("Wednesday")
        }
        else if (typeof day==="number" && day===5){
            return ("Thursday")
        }
        else if (typeof day==="number" && day===6){
            return ("friday")
        }
        else if (typeof day==="number" && day===7){
            return ("Sunday")
        }
        else if (typeof day==="number" && (day>7 || day<1)){
            throw new Error("Error: parameter should be in the range of 1 to 7")
        }
        else{
            throw new Error ("Error: parameter type is not a Number")
        }
    }
    catch(error){
        console.error(error.message);
    }
}
console.log(f(day))

//Create the function `isEven ()` that takes a number as a parameter and checks whether this number is even or not. If even, the function returns `true`, if odd -` false`. This function have to validate the input parameter, function can accept only a number.
//isEven(3); // false
//isEven(4); // true
//isEven('Content'); // Error: parameter type is not a Number
//Now handle error and log message in consol
var number="22";
function isEven(number){
    try{
        if (typeof number === "number"){
            if (number%2==0){
                return true;
            }
            else{
                return false;
            }
        }else{
            throw new Error("// Error: parameter type is not a Number")
        }
    }
    catch(error){
        console.error(error.message)
    }
}
console.log(isEven(number))

//You have the array with numbers `[1, 2, -4, 3, -9, -1, 7]`. Create a new array from this array with only positive numbers `[1, 2, 3, 7]` will remain. Create for this an additionnal function `isPositive (-3)` that will accept a number as a parameter and return true if the number is positive, and false if number is negative. This function has to validation the input parameter, because function can accept only a number.
//isPositive(-3) // false
//isPositive(3) // true
//isPositive('s') // Error: parameter type is not a Number
// Example of using push()
//var arr = [8];
//arr.push(2);
//console.log(arr[1]);
var arr=[1, 2, -4, 3, -9, -1, 7]
function isPositive(number){
    try{
        if (typeof number ==="number"){
            if (number>=0){
               return true
        }else{
            return false
        }
    }else{
        throw new Error("Error: parameter type is not a Number")
    }
    }
    catch(error){
        console.error(error.message)
    }
}
var dadebiti=arr.filter(number => isPositive(number))
console.log(dadebiti)

//Create function `getDivisors` that takes a number as a parameter and returns an array of its divisors (the numbers that divide the given number from 1 to the this number). This function has to validate the input parameter, because function can accept only a number greater than 0.
//getDivisors(12); // [1, 2, 3, 4, 6, 12]
//getDivisors('Content'); // Error: parameter type is not a Number
//getDivisors(0); // Error: parameter can't be a 0
var number = 4;

function getDivisors(number) {
    var divisors = [];
    try {
        if (typeof number === "number" && number >= 1) {
            for (var i = 1; i <= number; i++) {
                if (number % i == 0) {
                    divisors.push(i);
                }
            }
        } else if (number === 0) {
            throw new Error("Error: parameter can't be 0");
        }else{
            throw new Error("Parameter tyoe is not a Number")
        }
    } catch (error) {
        console.error(error.message);
    }
    return divisors;
}

console.log(getDivisors(number)); 

//You have the array with the numbers `[1, 2, 3]`. Create function `f` that takes this array as parameter and then displays elements of this array on the screen. Be sure to use recursion. Use the loops is prohibited. This function has to validate an input parameter, because function can accept only a non-empty array.
//([1,2,3]);
// 1
// 2
// 3
//f(1,2,3) // Error: parameter type should be an array
//f('Content') // Error: parameter type should be an array
//f([]) // Error: parameter can't be an empty
var arr=('s')
function f(arr) {
    try {
        if (!Array.isArray(arr)) {
            throw new Error("Error: parameter type should be an array");
        }
        if (arr.length === 0) {
            throw new Error("Error: parameter can't be an empty");
        }
        
        console.log(arr[0]);
        if (arr.length > 1) {
            f(arr.slice(1));
        }
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

f(arr)



