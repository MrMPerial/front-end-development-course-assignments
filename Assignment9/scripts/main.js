function getit(id) {
    return document.getElementById(id);
}

/**
 *      Part 1
 */

var myName = 'Chris Mitchell';
getit('partOne').innerHTML = myName;

/**
 *      Part 2
 */

var foo = "I forgot to do this";
foo = "This is not an integer";

getit('partTwo').innerHTML = foo;

/**
 *      Part 3
 */

var partThree = 5;
partThree += 10;
partThree *= 14;
partThree -= 25;

getit('partThree').innerHTML = partThree;

/**
 *      Part 4
 */

var fullName = 'fName' + ' ' + 'lName';

getit('partFour').innerHTML = fullName;

/**
 *      Part 5
 */

var myHtml = "";
myHtml = "<h2>Title</h2>" + "<p>Lorem ipsum dolor</h2>" + "<h3>Lorem ipsum dolor</h3>" + "<p>Morbi in sem quis dui placerat ornare.</p>";

getit('partFive').innerHTML = myHtml;

/**
 *      Part 6
 */

var part6Number = getRandomNumber();
var part6Result;

if( part6Number > 50 ) {
    part6Result = "Above 50";
} else {
    part6Result = "Below or equal to 50";
}

getit('part6Number').innerHTML = part6Number;
getit('part6Result').innerHTML = part6Result;

/**
 *      Part 7
 */

var part7Number = getRandomNumber();
var part7Result;

if( part7Number < 25 ) {
    part7Result = "Below 25";
} else if( part7Number >= 25 && part7Number < 50 ) {
    part7Result = "Between 25 and 50";
} else if( part7Number >= 50 && part7Number < 75 ) {
    part7Result = "Between 50 and 75";
} else {
    part7Result = "Above 75";
}

getit('part7Number').innerHTML = part7Number;
getit('part7Result').innerHTML = part7Result;

/**
 *      Bonus
 */

var numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

var i = 0;

for( i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

var ii = 0;

while( numbers[ii] ) {
    console.log(numbers[ii]);
    ii++;
}

document.getElementsByClassName('bonus')[0].style.height = "300px";
document.getElementsByClassName('bonus')[0].style.backgroundColor = "blue";

////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}