const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

/*  1. Turned it into an if statement
    2. If there is a key with the ID value 9, then log the name key of that ID
    3. If there isn't, then alert the user
*/
if (holidays[futureId]) {
  console.log(holidays[futureId].name);
} else {
  console.log(`ID ${futureId} not created yet`);
}

// console.log(holidays[futureId].name || `ID ${futureId} not created yet`); This does not work because it is not checking if it even exists, you are just asking for the value of it. I could have turned this into a ternary but is that "clever" code?

/*  1. Fixed the pathway from holidays.christmas to holidays[6]
    2. "copied" becomes a symbol?
    3. looked for the name key and changed it to "X-mas Day"
*/
copied = holidays[6];
copied.name = "X-mas Day";

/*  1. correctDate is a symbol?
    2. Remove the time in copied.date otherwise I cannot change the time with sethours/setminutes
    3. use sethours/setminutes to change the time
*/
correctDate = copied.date;
correctDate = new Date(`25 December ${currentYear}`);
correctDate.setHours = 0;
correctDate.setMinutes = 0;

isEarlier = correctDate < holidays[6].date; // Boolean? Changed copied.date to correctDate

console.log("New date is earlier:", isEarlier);

if (isEarlier) {
  copied.date = correctDate;
  console.log("ID change:", holidays[6].id != copied.id || copied.id);
  console.log("Name change:", holidays[6].name != copied.name || copied.name);
  console.log("Date change:", holidays[6].date != copied.date || copied.date);
} // changed from [christmas] to [6]

const firstHolidayTimestamp = Math.min(
  // holidays[0].date.getTime(), // Bugged, not allowed to touch code
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
); // Added parentheses to getTime

const lastHolidayTimestamp = Math.max(
  // holidays[0].date.getTime(), // Bugged, not allowed to touch code
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
); // Added parentheses to getTime

//  According to the AI: First convert the timestamps into date objects using new Date()
const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);

// Then extract the day and month from it
const firstDay = firstHolidayDate.getDate();
const firstMonth = firstHolidayDate.getMonth();
const lastDay = lastHolidayDate.getDate();
const lastMonth = lastHolidayDate.getMonth();

// Fixed the interpolation (back ticks, dollar signs)
console.log(`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

// Don't want to copy more from the AI. This feels out of my scope and I won't learn anything.
const randomHoliday = holidays[Math.random];
console.log(randomHoliday.date);

// When to use [] or . notation?
