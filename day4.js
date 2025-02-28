// # Task 2

// Create object `person` with two properties: `rate` and `salary`.

// The property `rate` can be read and written, but not deleted, and this property should
//  not participate in the enumeration of all properties when iterating.

// Property `salary` can be read, but can not be changed. When reading the property, `salary`
//  returns the result of multiplying the ` rate` field by the current day in the month. If 
// the rate is not set - return the number 0.
let person = {};
Object.defineProperty(person, "rate", {
    value: undefined,
    writable: true,
    enumerable: false,
    configurable: false
});
Object.defineProperty(person, "salary", {
    get() {
        const date = new Date(Date.now());
        const day = date.getDate();
        if (this.rate === undefined) {
            return 0;
        }return this.rate * day;
    },
})
console.log(person.salary);
// Create object `person` with only one property `salary`. During reading this property,
//  need to return string with text. If more than 20 days are left until the end of the month,
//  the string `good salary` is returned, and if not - the ` bad salary`.
const person = {
    get salary() {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      
      return currentDay > 20 ? 'good salary' : 'bad salary';
    }
  };
// Task 1
// Write a 'readingStatus(books)' function to display the reading status of the following books.
// - Use array iteration
// - Log each of them separately
// var Books = [ 
//   {
//       author: 'Bill',
//       title: 'The Road Ahead',
//       haveRead: true,
//       dateOfRead: new Date(2020, 10, 10)
//   },
//   {
//       author: 'Steve',
//       title: 'Walter Isaacson',
//       haveRead: true,
//       dateOfRead: new Date(2020, 10, 5)
//   },
//   {
//       author: 'Jhon',
//       title:  'The Hunger Games', 
//       haveRead: false,
//       dateOfRead: NaN
//   }
// ];
// Result should be:
//     'Bill have read The Road Ahead book'
//     'Steve have read Walter Isaacson book'
//     'Jhon havent read The Hunger Games book yet'
var books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN
    }
  ];
  function read_or_not(books){
      for (let i=0;i<books.length;i++){
          if (books[i].haveRead) {
              return (`${books[i].author} have read ${books[i].title} book`);
          }else {
              return (`${books[i].author} haven't read ${books[i].title} book yet`);
          }
      }
  }
//task2
  var books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title: 'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN
    }
  ];
  
  function readingStatus(books) {
      for (let i = 0; i < books.length; i++) {
          const book = books[i];
  
          const daysAgo = book.haveRead ? (() => {
              const currentDate = new Date();
              const timeDiff = currentDate - book.dateOfRead;
              const days = Math.floor(timeDiff / (1000 * 3600 * 24));
              return `${days} days ago`;
          })() : null;
  
          if (book.haveRead) {
              console.log(`${book.author} have read ${book.title} book ${daysAgo}`);
          } else {
              console.log(`${book.author} haven't read ${book.title} book yet`);
          }
      }
  }
  
  readingStatus(books);
  