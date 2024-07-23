
/*1. Write a custom function power ( a, b ), to calculate the value of
a raised to b. */
function calcPower(){
    var base=+prompt("Enter Base");
    var exponent=+prompt("Enter Exponent");
    var power=1;
if(exponent === 0){
    return 1;
}
    for(i=1;i<=exponent;i++){
       power*=base;
    }
    return "The power of base "  + base + " with exponent " + exponent + " is " + power;
}
console.log(calcPower());

/*Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not.
Leap years ..., 2012, 2016, 2020, ... */

// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are.

function isLeapYear(){
    var year=+prompt("Enter Year :");
    if((year % 4 === 0 && year % 100 !== 0  ) || (year % 400 === 0 )){
        alert("This year is a leap year!");
    }
    else{
        alert("This year is not a leap year");
    }
}
console.log(isLeapYear());

/*3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
//   }
  
//   Function to calculate the area of the triangle
  function calculateArea(a, b, c) {
    var S = calculateSemiPerimeter(a, b, c);
    return "The Area of a Triangle is "  + (S * (S - a) * (S - b) * (S - c));
  }
  
  var sideA =+prompt("Enter Side A"); //3;
  var sideB =+prompt("Enter Side B");//6;
  var sideC =+prompt("Enter Side C"); //7;
  console.log(calculateArea(sideA, sideB, sideC));
  

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function to calculate average
// function calculateAverage(a,b,c){
// return ((a,b,c)/3).toFixed(2);
// }

// function to calculate percentage
// function calculatePercentage(a,b,c){
//     return (((a+b+c)/300)*100).toFixed(2);
// }

// main function
// function mainFunction(a,b,c){
//     var average= calculateAverage(a,b,c);
//     var percentage = calculatePercentage(a,b,c);
//     console.log("Average of 3 subjects is "+ average);
//     console.log("Percentage of 3 subjects is "+ percentage);
    
// }

var subj1 =+prompt("Enter marks of subject 1 : "); //3;
  var subj2 =+prompt("Enter marks of subject 2 :");//6;
  var subj3 =+prompt("Enter marks of subject 3 :"); //7;
  console.log(mainFunction(subj1, subj2, subj3));
