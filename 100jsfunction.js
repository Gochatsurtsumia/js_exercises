function minutesToHours(minutes) {
    return minutes/60
}

export { minutesToHours };
//2
function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    return (nr1 + nr2 + nr3 + nr4) /4
}

export { averageOf4Numbers };
//3
function concat3(string1, string2, string3, separator) {
    return string1+ separator + string2 + separator + string3
}

export { concat3 };
//4
function max5(nr1, nr2, nr3, nr4, nr5) {
    return Math.max(nr1,nr2,nr3,nr4,nr5)
}

export { max5 };
//5
function getMonthsNeededToWait(index1, index2) {
    return index2>index1 ? index2-index1:12-index1+index2
}

export { getMonthsNeededToWait };
//6
function getGasolineAmount(distance, consumptionPer100Km) {
    return consumptionPer100Km*distance/100*2
}

export { getGasolineAmount };
//7
function lastNRevert(text, n) {
    return text.slice(-n).split('').reverse().join('')
}

export { lastNRevert };
//8
function getBusinessAddress(business) {
    return `${business.address.street}, number ${business.address.number}, ${business.address.zipCode}`;
}

export { getBusinessAddress };
//9
function getUserObject(firstName, lastName, age) {
    return {name:firstName+" "+lastName,
    age:age}
}

export { getUserObject };
//10
function canDriveCar(user, car) {
    return user.age>=18 ? true:user.age<18 && car.engineSize<1000 ? true : false
}

export { canDriveCar };
//11
function areAllNumbersEven(numbers) {
    return numbers.every(i => i%2==0)
}

export { areAllNumbersEven };
//12
function getBiggestNumberInArrays(numbers1, numbers2) {
    return Math.max(...numbers1.concat(numbers2))
}

export { getBiggestNumberInArrays };
//13
function getLongestString(arrayOfStrings) {
    if (arrayOfStrings.length === 0) return "";  // Return empty string for empty array
    return arrayOfStrings.reduce((a, b) => (a.length >= b.length ? a : b));
}

export { getLongestString };
//14
function everyNPositions(message, step) {
    return [...message].filter((i,index)=> index % step==0).join('')
}

export { everyNPositions };
//15
function doubleNumbers(numbers) {
    return numbers.map((number)=> number*2)
}

export { doubleNumbers };

//16
function mostRepetitions(string1, string2, letter) {
    return string1.toLowerCase().split('').filter((aso) => aso===letter).length>string2.toLowerCase().split('').filter((aso) => aso===letter).length ? string1 : string2
}

export { mostRepetitions };
//17
function getMillisecondsBetween(date1, date2) {
    return date1>date2?date1-date2:date2-date1;
}

export { getMillisecondsBetween };
//18
function getMonthOfTheYear(date) {
    let months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    
    let monthIndex = date.getMonth();
    
    return months[monthIndex];
  }
  
  export { getMonthOfTheYear };
//19
function addDays(initialDate, daysCount) {
    let newDate = new Date(initialDate);
    newDate.setDate(newDate.getDate() + daysCount);
    return newDate;
  }
  
  export { addDays };
//20
function getDevelopers(employees) {
    return employees.filter(momushave => momushave.job==="developer")
}

export { getDevelopers };
//21
function extractElementsBetweenPositions(numbers, n, m) {
    return n<m?numbers.slice(n,m+1):numbers.slice(m,n+1)
}

export { extractElementsBetweenPositions };
//22
function isSorted(numbers) {
    let ascending=true;
    let descending=true;
    for (let i=0;i<numbers.length;i++){
        if (numbers[i]>numbers[i+1]){
            ascending=false
        }
        if (numbers[i]<numbers[i+1]){
            descending=false
        }
    }return ascending || descending
}

export { isSorted };
//23
function halfAndHalf(text) {
    return text.slice(0,Math.floor(text.length/2)).toLowerCase() + text.slice(Math.floor(text.length/2)).toUpperCase()
}
export { halfAndHalf };
//24
function isSameDay(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
    
}

export { isSameDay };
//25
function getMaxMovingDistance(budget, weight, cost) {
    return 1000*budget/(weight*cost)
}

export { getMaxMovingDistance };
//26
function arrayToObject(strings) {
    return strings.reduce((obj,item,index) => {
        if (!(item in obj)){
            obj[item]=index
        }
        return obj;
    },{})
}

export { arrayToObject };
//27
function pickFields(data, fields){
    return fields.reduce((obj, item) => {
        if (item in data){
            obj[item]=data[item]
        }
        return obj
    },{})
}

export { pickFields };
//28
function getHighestPaidEmployee(employees, departmentId) {
    return employees
          .filter(emp => emp.departmentId === departmentId)
          .reduce((highest, current) => (current.salary > highest.salary ? current : highest), { salary: -Infinity }).name;
  }
  
  export { getHighestPaidEmployee };
//29
const people = {
    bob: "JS Developer",
    alice: "AI Engineer",
    jon: "JS Developer",
    nick: "UX Designer",
  };
  function flipObject(people) {
    return Object.entries(people).reduce((obj, [key, value]) => {
      if (!obj[value]) {
        obj[value] = []; // If the role doesn't exist yet, initialize it as an array
      }
      obj[value].push(key); // Add the person's name to the array corresponding to the role
      return obj; // Return the updated object
    }, {});
  }
  
  export { flipObject };
//30
function diffArrays(numbers1, numbers2) {
    return[...numbers1.filter(num => !numbers2.includes(num)),...numbers2.filter(num => !numbers1.includes(num))];
}

export { diffArrays };
//31
function countPageViews(pageViews, country, interval) {
    return pageViews
      .filter(view => 
        view.country === country && 
        view.date >= interval.startDate && 
        view.date <= interval.endDate) 
      .reduce((accumulator, view) => accumulator + view.count, 0);  // Sum up the 'count' values
  }
  
  export { countPageViews };
//32
function linkedNumbersSum(node) {
    return node===null ? 0: node.value+ linkedNumbersSum(node.next)
}

export { linkedNumbersSum };
//33
function removeFirstAndLast(source, target) {
    return source.replace(target,"").replace(new RegExp(target +"(?!.*"+target+")" ),"")
}

export { removeFirstAndLast };
//34
function biggestPowerOf2(number) {
    return number < 1 ? -1: Math.floor(Math.log2(number));
}

export { biggestPowerOf2 };
//35
function areValuesUnique(numbers) {
    return numbers.length!==new Set(numbers).size ? false : true
}

export { areValuesUnique };
//36
async function fetchGitHubName(username) {
    const url = `https://api.github.com/users/${username}`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        // If the response is not ok (i.e., user does not exist), resolve to null
        return null;
      }
  
      const data = await response.json();
      return data.name || null; // If 'name' is not available, return null
  
    } catch (error) {
      // In case of any error (network issues, etc.), resolve to null
      return null;
    }
  }
  
  export { fetchGitHubName };
//37
function rotateArray(items, n) {

    let n = n % items.length;
    return n === 0 ? items : items.slice(-n).concat(items.slice(0, items.length - n));
  
  }
  
  export { rotateArray };
//38
function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export { getDaysInMonth };
//39
function formatDateTime(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).format(date).replace(/\s+/g, ' ').trim();
}

export { formatDateTime };
//40
function toDecimal(base2Number) {
    return parseInt(base2Number, 2);
}

export { toDecimal };
//41
function compareSets(setA, setB) {
    const onlyA = new Set([...setA].filter(x => !setB.has(x)));
    const onlyB = new Set([...setB].filter(x => !setA.has(x)));
    const union = new Set([...setA, ...setB]);

    return {onlyA,onlyB,union};
}

export { compareSets };
//42
function groupBirthdays(users, groupBy) {
    const grouped = new Map();

    users.forEach(user => {
        let key;
        const birthday = user.birthday;
        if (groupBy === "month") {
            key = birthday.getMonth() + 1;
        }
        else if (groupBy === "day") {
            key = birthday.getDate();
        }
        else if (groupBy === "year") {
            key = birthday.getFullYear();
        }
        if (!grouped.has(key)) {
            grouped.set(key, []);
        }
        grouped.get(key).push(user);
    });

    return grouped;
}

export { groupBirthdays };
//43
function diffReactions(yesterdayReactions, todayReactions) {
    const result = [];

    // Check for new reactions or removed reactions for each user
    for (const userId in todayReactions) {
        const todayUserReactions = new Set(todayReactions[userId]);
        const yesterdayUserReactions = new Set(yesterdayReactions[userId] || []);

        // Check for new reactions today
        todayUserReactions.forEach(reaction => {
            if (!yesterdayUserReactions.has(reaction)) {
                result.push(`${userId} reacted with ${reaction}`);
            }
        });

        // Check for removed reactions today
        yesterdayUserReactions.forEach(reaction => {
            if (!todayUserReactions.has(reaction)) {
                result.push(`${userId} removed their ${reaction}`);
            }
        });
    }

    // Check for any users who reacted yesterday but are missing today
    for (const userId in yesterdayReactions) {
        if (!todayReactions.hasOwnProperty(userId)) {
            const yesterdayUserReactions = yesterdayReactions[userId];
            yesterdayUserReactions.forEach(reaction => {
                result.push(`${userId} removed their ${reaction}`);
            });
        }
    }

    return result;
}

export { diffReactions };
//44
function rgbToHex(rgbColor) {
    // Extract the values of r, g, and b from the string
    const rgbValues = rgbColor.match(/\d+/g);

    // Convert each value to hex and ensure two digits
    const hexColor = rgbValues.map(val => {
            const hex = parseInt(val).toString(16); // Convert to hexadecimal
            return hex.padStart(2, '0'); // Ensure two digits
        }).join('');

    return `#${hexColor}`;
}

export { rgbToHex };
//45
function timeAgo(date1, date2) {
    const differenceInMillis = Math.abs(date2 - date1);

    const seconds = Math.floor(differenceInMillis / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
        return "just now";
    } else if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days < 30) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (months < 12) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
        return "more than a year ago";
    }
}

export { timeAgo };

//46
function customArraySort(users, currentUserId) {
    let currentUser = null;
    const groups = {
        between35And50: [],
        under18: [],
        over50: [],
        between18And35: []
    };

    // Single pass to classify users
    for (const user of users) {
        if (user.id === currentUserId) {
            currentUser = user;
        } else if (user.age >= 35 && user.age < 50) {
            groups.between35And50.push(user);
        } else if (user.age < 18) {
            groups.under18.push(user);
        } else if (user.age >= 50) {
            groups.over50.push(user);
        } else {
            groups.between18And35.push(user);
        }
    }

    // Sorting each group in descending order by age
    for (const key in groups) {
        groups[key].sort((a, b) => b.age - a.age);
    }

    // Concatenating in the required order with the current user at the beginning
    return [
        ...(currentUser ? [currentUser] : []), // Add current user if found
        ...groups.between35And50,
        ...groups.under18,
        ...groups.over50,
        ...groups.between18And35
    ];
}

export { customArraySort };


//47
function moveItems(numbers, moveInstructions) {
    for (let {fromIndex, toIndex} of moveInstructions){
        if (fromIndex!==toIndex){
            let [removedelement]=numbers.splice(fromIndex,1)
            numbers.splice(toIndex,0,removedelement)
        }
    }return numbers
}

export { moveItems };
//48
function isValidPassword(password) {
    return /[A-Z].*[A-Z].*[A-Z]/.test(password) && /[0-9]/.test(password) && /[?_!*]/.test(password)
    
}

export { isValidPassword };
//49
function mergeSortedArrays(numbers1, numbers2) {
    return [...numbers1,...numbers2].sort((a,b) => a-b)
    
}

export { mergeSortedArrays };
//50
function ascendingSplit(numbers) {
    if (numbers.length===0) return [];
    let result=[]
    let subarray=[numbers[0]]
    for (let i=1;i<numbers.length;i++){
        if (numbers[i]>=numbers[i-1]){
            subarray.push(numbers[i])
        }else{
            result.push(subarray)
            subarray=[numbers[i]]
        }
    }
    result.push(subarray)
    return result

}

export { ascendingSplit };
//51
function findUniqueNumber(numbers) {
    return numbers.reduce((result, num) => result ^ num, 0);
  }
  
  export { findUniqueNumber };
//52
function parseQueryParams(url) {
    return new Map(new URLSearchParams(url.split('?')[1]));
  }
  
  export { parseQueryParams };
//53
function simpleCompression(text) {
    if (text.length===0) return '';
    let result='';
    let substring=text[0];
    for (let i=1;i<text.length;i++){
        if (text[i]===text[i-1]){
            substring+=text[i]
        }else{
                result += substring[0] + (substring.length >1 ? substring.length:'')
                substring=text[i]
        }
    }
    result+=substring[0] +(substring.length >1 ?substring.length:'' )
    return result
}

export { simpleCompression };

//54
function partitionArray(numbers, predicateCallback) {
    return numbers.reduce((result,num) => {
        result[predicateCallback(num)?'pass':'fail'].push(num);
        return result;
    },{pass:[],fail:[]}   )
}

export { partitionArray };
//55
function findFreeCalendarSpots(meetings) {
    const WORK_START = 9 * 60; // 9:00 in minutes
    const WORK_END = 17 * 60;  // 17:00 in minutes

    // Convert meetings to minutes and sort by start time
    let bookedTimes = meetings
        .map(({ startTime, duration }) => ({
            start: startTime.hours * 60 + startTime.minutes,
            end: startTime.hours * 60 + startTime.minutes + duration
        }))
        .sort((a, b) => a.start - b.start);

    let freeSlots = [];
    let lastEnd = WORK_START;

    for (const { start, end } of bookedTimes) {
        if (start > lastEnd) {
            freeSlots.push({
                startTime: { hours: Math.floor(lastEnd / 60), minutes: lastEnd % 60 },
                duration: start - lastEnd
            });
        }
        lastEnd = Math.max(lastEnd, end);
    }

    // Add final free slot if time remains after last meeting
    if (lastEnd < WORK_END) {
        freeSlots.push({
            startTime: { hours: Math.floor(lastEnd / 60), minutes: lastEnd % 60 },
            duration: WORK_END - lastEnd
        });
    }

    return freeSlots;
}

export { findFreeCalendarSpots };
//chagtp
//56
function mergeIntervals(intervals, newIntervals) {
    let result = [...intervals, ...newIntervals];
    result.sort((a, b) => a.from - b.from);
    
    let merged = [];

    for (let i = 0; i < result.length; i++) {
        if (merged.length === 0 || merged[merged.length - 1].to < result[i].from) {
            merged.push(result[i]);
        } else {
            merged[merged.length - 1].to = Math.max(merged[merged.length - 1].to, result[i].to);
            merged[merged.length - 1].numbers = [
                ...merged[merged.length - 1].numbers,
                ...result[i].numbers.filter(num => !merged[merged.length - 1].numbers.includes(num))
            ];
        }
    }

    return merged;
}

export { mergeIntervals };
//58
function simpleURLParser(route, url) {
    const routeParts = route.split('/');
    const urlParts = url.split('/');

    if (routeParts.length !== urlParts.length) return false;

    const isValid = (part, urlPart) => part.startsWith(':') ? /^[a-zA-Z0-9-]+$/.test(urlPart) : part === urlPart;

    return routeParts.every((part, i) => isValid(part, urlParts[i]));
}

export { simpleURLParser };
//60
async function fetchNamesOfAllPublicRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`; 
    let repos = [];
    let nextUrl = url;
  
    try {
      while (nextUrl) {
        const response = await fetch(nextUrl);
        if (!response.ok) {
          return [];
        }
  
        const pageRepos = await response.json();
        repos = repos.concat(pageRepos.map(repo => repo.name)); 
        const linkHeader = response.headers.get('Link');
        if (linkHeader && linkHeader.includes('rel="next"')) {
          const nextPageMatch = linkHeader.match(/<([^>]+)>; rel="next"/);
          nextUrl = nextPageMatch ? nextPageMatch[1] : null;
        } else {
          nextUrl = null;
        }
      }
      return repos;  // Return the accumulated list of repository names
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];  // Return an empty array in case of any errors
    }
  }
  export { fetchNamesOfAllPublicRepos };
//61
function getPaginatedData(users, sortBy, direction, perPage, pageNumber) {
    const sortedUsers = [...users].sort((a, b) => {
      if (direction === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0;
      }
    });
    const startIndex = (pageNumber - 1) * perPage;
    const endIndex = startIndex + perPage;
    return sortedUsers.slice(startIndex, endIndex);
  }
  export { getPaginatedData };
//62
function getCheckPassword(originalPassword) {
    return function(inputPassword) {
      return inputPassword === originalPassword ? "true" : "false";
    };
  }
  
  export { getCheckPassword };
//63
function getAdd5() {
    return function add5(number){
        return number +5
    }
}

export { getAdd5 };
//64
function getAddN(N) {
    return function addN(number) {
      return number + N;
    };
  }
  
  export { getAddN };
//65
async function fetchClosedPullRequests(username, repo) {
    let page = 1;
    let pullRequestIds = [];
    let hasMore = true;
    
    while (hasMore) {
      const url = `https://api.github.com/repos/${username}/${repo}/pulls?state=closed&page=${page}`;
  
      try {
        const response = await fetch(url);
  
        if (!response.ok) {
          return [];
        }  
        const pullRequests = await response.json();
        pullRequests.forEach(pr => pullRequestIds.push(pr.id)); 
        if (pullRequests.length < 30) {
          hasMore = false;
        } else {
          page++;
        }
      } catch (error) {
        return [];
      }
    }
  
    return pullRequestIds;
  }
  
  export { fetchClosedPullRequests };  
//66
async function fetchBranchNames(username, repo) {
    let page = 1;
    let branchNames = []; 
    let hasMore = true; 
  
    while (hasMore) {
      const url = `https://api.github.com/repos/${username}/${repo}/branches?page=${page}`;
  
      try {
        const response = await fetch(url);
  
        if (!response.ok) {
          return [];
        }  
        const branches = await response.json();
        branches.forEach(branch => branchNames.push(branch.name)); 
  
        if (branches.length < 30) {
          hasMore = false;
        } else {
          page++;
        }
      } catch (error) {
        return [];
      }
    }
  
    return branchNames;
  }
  export { fetchBranchNames };
//67
function searchMessages(messages, searchTerm) {
    const searchWords = searchTerm.toLowerCase().split(/\s+/);
    
    const filteredMessages = messages.filter(message => {
      const body = message.body.toLowerCase();
      return searchWords.some(word => body.includes(word));
    });
  
    filteredMessages.sort((a, b) => {
      const matchCountA = searchWords.reduce((acc, word) => acc + (a.body.toLowerCase().includes(word) ? word.length : 0), 0);
      const matchCountB = searchWords.reduce((acc, word) => acc + (b.body.toLowerCase().includes(word) ? word.length : 0), 0);
  
      if (matchCountB !== matchCountA) {
        return matchCountB - matchCountA;
      }
  
      return b.sentAt - a.sentAt;
    });
  
    return filteredMessages;
  }

export { searchMessages };
//90
class TodoList {
    constructor(){
        this.todo=new Map();
    }
    add(id,task) {
        this.todo.set(id, { id, task,done:false});
    }
    getItem(id){
        return this.todo.get(id)
    }markAsDone(id) {
        this.todo.get(id).done=true
    }
    remove(id){
        this.todo.delete(id)
    }
    getAll(){
        return Array.from(this.todo.values())
    }
    
}
//88
class Animal {
    #name;
    constructor(name){
        this.#name=name
    }get name(){
        return this.#name
    }
    sleep(){
        return `${this.#name} is sleeping...`
    }
    eat(){
        return `${this.#name} is eating. Nom nom!`
    }
}
class Dog extends Animal{
    #breed;
    constructor(name,breed){
        super(name);
        this.#breed=breed
    }
    get breed(){
        return this.#breed;
    }
    bark(){
        return `${this.name}: Woof! Woof!`
    }

}
class GoldenRetriever extends Dog{
    constructor(name) {
        super(name, "Golden Retriever");
    }
    guardHouse(){
        return `${this.name} is a ${this.breed} thus too friendly to guard the house.`
    }
}
export { Animal, Dog, GoldenRetriever };
//