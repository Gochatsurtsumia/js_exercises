//1.Replace conditional operator `if` to ternary operator.

```js
var result;
if (a + b < 4) {
  result = true;
} else {
  result = false;
}
```
var result = (a+b<4) ? true : false

//Task 2

```Replace if..else to several ternary operators. 

For readability - write the code in several lines.

js
var message;

if (login == 'Pitter') {
  message = 'Hi';
} else if (login == 'Owner') {
  message = 'Hello';
} else if (login == '') {
  message = 'unknown';
} else {
  message = '';
}
```
var mesage=(login =='Pitter') ? 'Hi': (login== 'Owner') ? 'Hello': (login == '') ? 'unknown': ''

//Task 3

```Replace switch to operator if..else:

js
switch (val) {
  case 'a':
    console.log( 'a' );
    break;

  case 'b':
  case 'c':
  case 'd':
  case 'e':
    console.log( 'others' );
    break;

  default:
    console.log( 'unknown' );
}
```
if (val=='a'){
  console.log('a')
}
else if (val=='b'|| val=='c'|| val=='d'||val=='e'){
  console.log('others')
}
else{
  console.log('unknown')
}
//Task 4

```Replace code with using only one switch:

js
var a = 0;

if (a == 0) {
  console.log( 0 );
}
if (a == 1) {
  console.log( 1 );
}

if (a == 2 || a == 3) {
  console.log( '2,3' );
}
```
var a=0;
switch (a){
  case 0:
    console.log(0)
    break
  case 1:
    console.log(1)
    break
  case 2:
  case 3:
    console.log('2,3')
    break
}
//5task. Replace loop `for` to `while`. Result should be the same.

```js
for (var i = 0; i < 3; i++) {
  console.log( "number " + i + "!" );
}
```
var i = 0;
while (i<3){
  console.log('number'+ i +'!')
  i++
}
//6task
//Write code for counting sum of all elements in array. Show result in console.

```js
var arr = [1,2,3,4];
```

var arr = [1,2,3,4];
var sum=0
for (var i= 0;i<arr.length;i++){
  sum+=arr[i];
}


//7task sum of even elements in array

var arr=[1,2,3,4]
var sum=0
for (var i=0;i<arr.length;i++){
  if (arr[i]%2==0){
    sum+=arr[i]
  }
}
//task 8
```
Write code for printing all prime numbers from 2 to 10.

Result should be: 2,3,5,7.

*A prime number is a whole number greater than 1 whose only factors are 1 and itself.*
```

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var a = 0; a < arr.length; a++) {
  var trueornot = true;
  if (arr[a] <= 1) {
    trueornot = false;
  }
  for (var i = 2; i < arr[a]; i++) {
    if (arr[a] % i == 0) {
      trueornot = false;
      break;
    }
  }
  if (trueornot) {
    console.log(arr[a] + " is prime");
  }
}
//Sort the array in descending order. Show result in console.

var arr=[5,9,4,5,3,12,5,16,7,2]
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
//Sort the array in ascending order. Show result in console.
var arr=[5,9,4,5,3,12,5,16,7,2]
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
//You have array. Inside this array you can have positive and negative numbers
// . Count a sum of positive numbers. Show result in console.
var arr=[2,3,4,-2,-12];
var sum=0;
for (var i=0;i<arr.length;i++){
    if (arr[i]>0){
        sum+=arr[i];
    }
}
console.log(sum);

//You have array `[1, 2, 5, 9, 4, 13, 4, 10]`. Using loop `for` and operator `if`
// , check do we have in array element with value 4. If we have, print to console "
// Exist!" and stop loop execution. If no, don't need to print nothing.
var arr=[1, 2, 5, 9, 4, 13, 10]
for (var i=0;i<arr.length;i++){
    if (arr[i]===4){
        console.log("Exist!")
        break
    }
}
//You have array `[2, 5, 9, 15, 0, 4]`. Using loop `for` and operator `if`, show in console, 
// elements which great than 3, but less than 10.

var arr=[2, 5, 9, 15, 0, 4];
var a=[];
for (var i=0;i<arr.length;i++){
    if (arr[i]>3 && arr[i]<10){
        a.push(arr[i])
    }
}
console.log(a)
//You have number `n=1000`. Divide it by 2 as many times as long as the result of the d
// ivision is greater than 50. What is the number? Count the number of iterations requir
// ed for this (iteration is a loop pass), and write it to the variable `num`. Show the
//  result to console.
var n=1000;
var num=0;
while (n/2>50){
    n/=2
    num++;
}
console.log(n,num)







