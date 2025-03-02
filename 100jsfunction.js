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


