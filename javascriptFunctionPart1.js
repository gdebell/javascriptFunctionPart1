//Test that js and html are communicating...
console.log("insanity test");

/* Defining a Function:
   function test(str) {
    return "test" + str
 }
   Calling a Function:
   test(str);
 */

//Problem: #1
console.log("Problem #1:");
//Create a function
function sum(num1, num2) {
  return num1 + num2;
 }
 console.log(sum(2,3));
 console.log("      ");

//Problem: #2
console.log("Problem #2:");
function isEqual(arg1, arg2) {
  if(arg1 === arg2) {
    return true;
  }else{
    return false;
  }
}
console.log(isEqual(2,2));  /* true */
console.log(isEqual(3,4));  /* false */
console.log("      ");

//Problem: #3
console.log("Problem #3:");

function discountPercentage (cost, discount) {
  if(discount >= 0 && discount <= 100) {
    return "Original Cost: " + cost + " Discount: " + discount + "%. You owe $" + (cost - (cost * (discount/100))) + " after the discount.";
  } else {
    return "Warning";
  }
}

console.log(discountPercentage(100, 110));
console.log(discountPercentage(100, 5));
console.log(discountPercentage(100, 50));
console.log("         ");


// define function call discountPercentage
// arguments => orignial, discount (0-100)
// instructions=>
//   test to see if discount is less than 100 and greater than 0
//     if true
//         do math => calculate percentage and return
//     if false
//         return 'warning'
// returned =>total discount

//Problem: #4
console.log("Problem #4:");

function stringCapitalize(string) {
    var arrayCaps = [];
    var arrayOfString = string.split(" ");
    for (var i=0; i<arrayOfString.length; i++){
       arrayCaps.push(arrayOfString[i].charAt(0).toUpperCase() + arrayOfString[i].slice(1))
    }
    return arrayCaps.join(" ")
  }
  console.log(stringCapitalize("this is my string."));

//Problem 5
console.log("Problem #5:");
var userInteger;
var roundUp;
function evenNumbers (userInteger) {
  //round the number up so we can work with a whole #
  roundUp = Math.ceil(userInteger);
  //check to make sure the number is betweem 0-100
  if ((!Number.isInteger(roundUp)) || (roundUp < 0) || (roundUp > 100)){
    return "Invalid Number.";
  }else {
    for(var j=0; j<= roundUp; j++) {
    //output all the even integers from 0 to that numbers
      if(j%2===0) {
        console.log(j);
      }
    }
  }
}

//check my outputs
console.log(evenNumbers(6));
console.log(evenNumbers(201));
console.log(evenNumbers("1"));
console.log("             ");
//I am getting undefined and I am not sure why?!?!

//Problem 6
console.log("Problem #6:");
function isDivisible(argum1, argum2) {
  var isDivisibleAnswer = argum1 / argum2;
  if (isDivisibleAnswer%2===0) {
    return "true";
  } else {
    return "false";
  }
}

console.log(isDivisible(100, 50));
console.log(isDivisible(200, 50));
console.log(isDivisible(50, 100));
console.log(isDivisible(3, 2));
