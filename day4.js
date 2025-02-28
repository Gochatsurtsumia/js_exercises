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
//   # Task 1

//   Write function `upperCaseFirst(string)` that returns capitalized string `str`.
  
//   If parameter isn't string - throw error.
  
//   ```javascript
//   upperCaseFirst('pitter'); // Pitter
//   upperCaseFirst(''); // ''
//   ```
  
function upperCaseFirst(string){
    if (typeof string !== "string"){
        throw new Error("not a string")
    }
    return string.charAt(0).toUpperCase()+ string.slice(1)
}
// # Task 2

// Write function `checkSpam(source, example)` that returns `true`, if string `source` contains `example`, otherwise `false`.

// The function should not be case sensitive:

// If first or second parameters aren't string - throw error.

// ```javascript
// checkSpam('pitterXXX@gmail.com', 'xxx'); // true
// checkSpam('pitterxxx@gmail.com', 'XXX'); // true
// ```
function checkSpam(source,example){   
    if (typeof source !== "string" || typeof example !== "string"){
        throw new Error("not a string")
    }
    return source.toLowerCase().includes(example.toLowerCase())
}
// # Task 3

// Write function `truncate(string, maxlength)` that checks string length `string`, and if lenth more than `maxlength` – replace end of string `str` to `... ` ,so that its length is equal to `maxlength`.

// The result of the function should be (if necessary) a truncated string.

// If first parameter isn't string - throw error.
// If second parameter isn't number - throw error.

// ```javascript
// truncate('I wanna to say next thing about this topic', 22); // 'I wanna to say next...'
// ```

function truncate(string, maxlength) {
    if (typeof string !== 'string') {
        throw new Error('araa stringi');
    }
    if (typeof maxlength !== 'number') {
        throw new Error('araa stringi');
    }
    if (string.length > maxlength) {
        return string.slice(0, maxlength - 3) + '...';
    }return string;
}

// task 1

// Write a `rmHtmlTags` function to remove HTML tags from string.

// *We may use RegExp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions*

// Also add type checks and throw an error if param is not string;

// ```javascript
// rmHtmlTags('<p><strong><em>Content</em></strong></p>') // Content
// ```
// function rmHtmlTags(str) {
//     if (typeof str !== 'string') {
//         throw new Error('Parameter must be a string');
//     }
//     return str.replace(/<\/?[^>]+(>|$)/g, '');
// }
function rmHtmlTags(str) {
    if (typeof str !== 'string') {
        throw new Error('araa stringi');
    }
    return str.replace(/<\/?[^>]+(>|$)/g, '');
}

// # Task 2

// You have price as string: `"$120"`.

// The first character is the currency, then the number.

// Write function `extractCurrencyValue(source)` that will allocate a numeric value from such a string, in this case 120.

// Pay attention that it is necessary to return not string 120, need to return the number 120!

// If first parameter isn't string - throw error.

// ```javascript
// extractCurrencyValue('$120'); // 120
// ```
function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        throw new Error('araa stringi');
    }return Number(source.replace(/[^\d.-]/g, ''));

}

// # Task 3

// Write a `searchWord` function to find a word within a string. Count found word(s)

// Also add type checks and throw an error if params are not strings

// ```javascript
// searchWord('The quick brown fox', 'fox'); // "'fox' was found 1 times."
// searchWord('aa, bb, cc, dd, aa', 'aa'); // "'aa' was found 2 times."
// ```
function searchWord(source, word) {
    if (typeof source !== 'string' || typeof word !== 'string') {
        throw new Error('orive unda iyos stringi');
    }
    
    source = source.toLowerCase();
    word = word.toLowerCase();
    
    const wordsArray = source.split(/\s+/);
    
    let count = 0;
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === word) {
            count++;
        }
    }
    
    return `'${word}' was found ${count} times.`;
}





