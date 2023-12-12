///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]


// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE


let totalAcres = 0;
let acresLen = fujiAcres.length - 1;

// Comment: Using a for loop, to go over all the arces array in every loop, and then calculate the total number of acres picked for the entire week.
for (let i = acresLen; i >= 0; i--) {
    totalAcres += fujiAcres[acresLen] + galaAcres[acresLen] + pinkAcres[acresLen];
    acresLen--;
}
console.log(totalAcres)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE
const totalDays = 7;

// Comment: calculate averageDailyAcres use totalAcres / totalDays
let averageDailyAcres = totalAcres / totalDays;
console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174
let days = 0

// CODE HERE

// Comment: this might be the more efficient math formular
// console.log(acresLeft / averageDailyAcres)

// Comment: inside the while loop, reduce the acresLeft, and exit the loop while acresLeft = 0
while (acresLeft > 0) {
    days += 1;
    acresLeft -= averageDailyAcres;
}
console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples
    picked, in tons, for each variety.

    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

let produce = 6.5;
let arcesLen = fujiAcres.length - 1;

// Comment: use one loop to go over all the array and do the calculation, and update the fujiTons,galaTons,pinkTons at the same time
for (let i = 0; i < arcesLen; i++) {
    fujiTons[i] = fujiAcres[i] * produce;
    galaTons[i] = galaAcres[i] * produce;
    pinkTons[i] = pinkAcres[i] * produce;
}
console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number
    into pounds -- store that number in the variables given below.

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiWeight = 0;
let galaWeight = 0;
let pinkWeight = 0;

// Comment:Use for loop to alculate total pounds for Fuji variety, Gala variety, Pink variety
for (let i = 0; i < fujiTons.length; i++) {
    fujiWeight += fujiTons[i] * 2000;
    galaWeight += galaTons[i] * 2000;
    pinkWeight += pinkTons[i] * 2000;
}
console.log(fujiWeight)
console.log(galaWeight)
console.log(pinkWeight)


// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to
    figure out how much you'll make from selling each type of apple.

    The prices are per pound and are written in cents.

    Log each of the profits to the console.
*/
const fujiPrice = .89
const galaPrice = .64
const pinkPrice = .55

// CODE HERE
// Comment: the prices are written in cents, but I converted to dollar.

let fujiProfit = fujiWeight * fujiPrice/100;
let galaProfit = galaWeight * galaPrice/100;
let pinkProfit = pinkWeight * pinkPrice/100;
// let galaProfit = galaWeight * galaPrice.toFixed(2);
// let pinkProfit = pinkWeight * pinkPrice.toFixed(2);

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called
    `totalProfit`.
    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit)
