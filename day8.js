// We have following array of users
const Users = [
    { name: 'Jhon', age: 25 },
    { name: 'Jhon', age: 21 },
    { name: 'Doe', age: 34 }
]
const userSymbols=Users.map(user=> Symbol(user.name))
function funqcia(users){
let symbolUsers={}
users.forEach((user,index)=>{
    symbolUsers[userSymbols[index]]=user
})
return symbolUsers;
}

console.log(funqcia(Users))

// - Create new Symbol array of user names from that array (for key propose)
// - Create function which should return new object from that array like this
// const destructuredUsers = {
//     unicIdentifier: { name: 'Jhon', age: 25 },
//     unicIdentifier: { name: 'Jhon', age: 21 }
// }
// - unicIdentifier should be a Symbol
// - iterate through Symbol array find and log all user age from destructuredUsers objec

//2
// #### Task 2

// - Create Class `Users` which creates and preserves new Map collection
// - Class should have method `add` which adds new user by provided object as a key
// - Method `add` should have user object as argument like this {name:'gio', age: 22}
// - Method `add` should return inserted User key
// - Class should have method `getAge` which takes User key

class Users {
    constructor(){
        this.map=new Map()
    }add(user){
        let userkey=Symbol(user.name)
        this.map.set(userkey,user)
        return userkey
    }getAge(userkey){
        return this.map.get(userkey)?.age??null
    }
}
const users = new Users();
const user = users.add({name:'gio', age: 22});
console.log(users.getAge(user)); // 22
//1
class DB {
    constructor() {
        this.map = new Map();
    }

    generateId() {
        return crypto.randomUUID();
    }

    validateUser(user) {
        if (!user || typeof user !== 'object' || Array.isArray(user)) {
            throw new Error('Invalid user: must be a non-null object.');
        }

        const requiredFields = { 
            name: 'string', 
            age: 'number', 
            country: 'string', 
            salary: 'number' 
        };

        for (let key in requiredFields) {
            if (!user.hasOwnProperty(key) || typeof user[key] !== requiredFields[key]) {
                throw new Error(`Invalid user: "${key}" must be a ${requiredFields[key]}.`);
            }
        }
    }

    create(user) {
        this.validateUser(user);
        const id = this.generateId();
        this.map.set(id, user);
        return id;
    }

    read(id) {
        if (id === undefined) {
            throw new Error('ID is required.');
        }
        if (typeof id !== 'string') {
            throw new Error('ID must be a string.');
        }
        if (!this.map.has(id)) {
            return null;
        }
        return { id, ...this.map.get(id) };
    }

    readAll(param) {
        if (param !== undefined) {
            throw new Error('readAll() does not accept parameters.');
        }
        return Array.from(this.map.entries()).map(([id, user]) => ({ id, ...user }));
    }

    update(id, updates) {
        if (typeof id !== 'string') {
            throw new Error('ID must be a string.');
        }
        if (!this.map.has(id)) {
            throw new Error('User not found.');
        }
        if (!updates || typeof updates !== 'object' || Array.isArray(updates)) {
            throw new Error('Invalid update: must be a non-null object.');
        }

        const existingUser = this.map.get(id);
        const updatedUser = { ...existingUser, ...updates };
        this.validateUser(updatedUser);
        this.map.set(id, updatedUser);
    }

    delete(id) {
        if (typeof id !== 'string') {
            throw new Error('ID must be a string.');
        }
        if (!this.map.has(id)) {
            throw new Error('User not found.');
        }
        this.map.delete(id);
        return true;
    }
}

const db = new DB();

const person = {
    name: 'Pitter',
    age: 21,
    country: 'ge',
    salary: 500
};

const id = db.create(person);

const customer = db.read(id);
console.log(customer);

const customers = db.readAll();
console.log(customers);

db.delete(id);
console.log(db.read(id));
//2
class DB {
    constructor() {
        this.map = new Map();
    }

    generateId() {
        return crypto.randomUUID();
    }

    validateUser(user) {
        if (!user || typeof user !== 'object' || Array.isArray(user)) {
            throw new Error('Invalid user: must be a non-null object.');
        }

        const requiredFields = { 
            name: 'string', 
            age: 'number', 
            country: 'string', 
            salary: 'number' 
        };

        for (let key in requiredFields) {
            if (!user.hasOwnProperty(key) || typeof user[key] !== requiredFields[key]) {
                throw new Error(`Invalid user: "${key}" must be a ${requiredFields[key]}.`);
            }
        }
    }

    create(user) {
        this.validateUser(user);
        const id = this.generateId();
        this.map.set(id, user);
        return id;
    }

    read(id) {
        if (id === undefined) {
            throw new Error('ID is required.');
        }
        if (typeof id !== 'string') {
            throw new Error('ID must be a string.');
        }
        if (!this.map.has(id)) {
            return null;
        }
        return { id, ...this.map.get(id) };
    }

    readAll(param) {
        if (param !== undefined) {
            throw new Error('readAll() does not accept parameters.');
        }
        return Array.from(this.map.entries()).map(([id, user]) => ({ id, ...user }));
    }

    update(id, updates) {
        if (typeof id !== 'string') {
            throw new Error('ID must be a string.');
        }
        if (!this.map.has(id)) {
            throw new Error('User not found.');
        }
        if (!updates || typeof updates !== 'object' || Array.isArray(updates)) {
            throw new Error('Invalid update: must be a non-null object.');
        }

        const existingUser = this.map.get(id);
        const updatedUser = { ...existingUser, ...updates };
        this.validateUser(updatedUser);
        this.map.set(id, updatedUser);
    }

    delete(id) {
        if (typeof id !== 'string') {
            throw new Error('ID must be a string.');
        }
        if (!this.map.has(id)) {
            throw new Error('User not found.');
        }
        this.map.delete(id);
        return true;
    }

    find(query) {
        if (typeof query !== 'object' || Array.isArray(query)) {
            throw new Error('Query must be an object.');
        }

        const result = Array.from(this.map.values()).filter(user => {
            for (let key in query) {
                if (key === 'name' || key === 'country') {
                    if (user[key] !== query[key]) {
                        return false;
                    }
                }
                if (key === 'age' || key === 'salary') {
                    if (typeof query[key] === 'object') {
                        const { min, max } = query[key];
                        if (min !== undefined && user[key] < min) {
                            return false;
                        }
                        if (max !== undefined && user[key] > max) {
                            return false;
                        }
                    } else {
                        if (user[key] !== query[key]) {
                            return false;
                        }
                    }
                }
            }
            return true;
        });

        return result;
    }
}

// Example Usage
const db = new DB();

const person1 = {
    name: 'Pitter',
    age: 21,
    country: 'ua',
    salary: 500
};

const person2 = {
    name: 'Alex',
    age: 25,
    country: 'ua',
    salary: 600
};

const person3 = {
    name: 'Tom',
    age: 28,
    country: 'ge',
    salary: 400
};

const id1 = db.create(person1);
const id2 = db.create(person2);
const id3 = db.create(person3);

const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};

const customers = db.find(query);
console.log(customers);
