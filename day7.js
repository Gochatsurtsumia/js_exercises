//1
// #### Task 1
// Implement class **Worker**, that has next properties: **name**, **surname**, **rate**, **days**. Also the class should have the method **getSalary ()**, that will display the employee's salary. Salary - is the multiplication of the **rate** by the number of worked **days**
class Worker {
    constructor(name,surname,rate,days){
        this.name=name;
        this.surname=surname;
        this.rate=rate;
        this.days=days
    }
    getSalary(){
        return this.rate*this.days
    }
}

var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.name); // print 'John'
console.log(worker.surname); // print 'Smith'
console.log(worker.rate); // print 10
console.log(worker.days); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

// //2
// Modify the **Worker** class from the previous task as follows:

// - make all its properties private
// - to read them, make getter methods.

class Worker {
    #name;
    #surname
    #rate;
    #days;  
    constructor(name,surname,rate,days){
        this.#name=name;
        this.#surname=surname;
        this.#rate=rate;
        this.#days=days
    }
    getName(){return this.#name}
    getSurname(){return this.#surname}
    getRate(){return this.#rate}
    getDays(){return this.#days}

    getSalary(){
        return this.#rate*this.#days
    }
}
var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getName()); // print 'John'
console.log(worker.getSurname()); // print 'Smith'
console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*3
// Modify the **Worker** class from the previous task as follows:
// - for the **rate** and **days** properties create the setter methods.
class Worker {
    #name;
    #surname
    #rate;
    #days;  
    constructor(name,surname,rate,days){
        this.#name=name;
        this.#surname=surname;
        this.#rate=rate;
        this.#days=days
    }
    getName(){return this.#name}
    getSurname(){return this.#surname}
    getRate(){return this.#rate}
    getDays(){return this.#days}
    setRate(newRate){
        this.#rate=newRate;
    }setDays(newDays){
        this.#days=newDays
    }

    getSalary(){
        return this.#rate*this.#days
    }
}
var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31
worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10

//3
// Modify the **Worker** class from the previous task as follows:
// - for the **rate** and **days** properties create the setter methods.
class Worker {
    #name;
    #surname
    #rate;
    #days;  
    constructor(name,surname,rate,days){
        this.#name=name;
        this.#surname=surname;
        this.#rate=rate;
        this.#days=days
    }
    getName(){return this.#name}
    getSurname(){return this.#surname}
    getRate(){return this.#rate}
    getDays(){return this.#days}
    setRate(newRate){
        this.#rate=newRate;
    }setDays(newDays){
        this.#days=newDays;
    }

    getSalary(){
        return this.#rate*this.#days
    }
}
var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31
worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10

// #### Task 4

// Implement the class **MyString** with next methods:

// - method **reverse()** that gets string as parameter and returns it in reverse order
// - method **ucFirst()** that gets string as parameter and returns it with capitalized first letter
// - method **ucWords** that gets string as parameter and capitalize first letter in each word of this string. After, returns this new string
class MyString {
    reverse(string) {
        return string.split('').reverse().join('')
    }
    ucFirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    ucWords(string){
        return string.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
    }
}
var str = new MyString();
//1
console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'

class Validator {
    isEmail(string) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(string);
    }
   isDomain(string) {
        const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return domainRegex.test(string);
    }
    isDate(string) {
        const dateRegex = /^([0-2][0-9]|(3)[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/;
        return dateRegex.test(string);
    }
    isPhone(string) {
        const phoneRegex = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(string);
    }
}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru')); // true
console.log(validator.isDomain('jshtml.net')); // true
console.log(validator.isDate('12.05.2020')); // true
console.log(validator.isPhone('+375 (29) 817-68-92')); // true
//2
// Implement the class **Student** that extends the class **User**. This class has to have next properties:
// - **name** (extends from User)
// - **surname** (extends from User)
// - **year** (year of admission)
// This class has to have next methods:
// - method **getFullName()** (extends from User). Using this class we can get name and surname together.
// - method **getCourse()** that returns current course (from 1 to 4). To calculate it: need to subtract from current year the year of admission.
class Student {
	constructor(name, surname,year) {
		this.name = name;
		this.surname = surname;
		this.year=year
	}
	getFullName() {
		return this.name + ' ' + this.surname;
	}
	getCourse(year){
	    const currentYear = new Date().getFullYear();
	    return currentYear-this.year
	}
}
var student = new Student('John', 'Smith', 2016);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'Smith'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2016
console.log(student.getCourse()); // print 4 - fourth course, because current year 2020
