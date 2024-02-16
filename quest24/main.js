/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
var s1 = "abcd";
var s2 = "wxyz";
console.log("Are the strings not equal? I predict true.");
console.log(s1 !== s2);
console.log("Are the strings equal? I predict false.");
console.log(s1 === s2);
var greet = "HI";
var lowerCase = greet.toLowerCase();
console.log("Is the greet in lower case? I predict true.");
console.log(lowerCase === "hi");
console.log("Is the greet in upper case? I predict false.");
console.log(lowerCase === "HI");
var num1 = 5;
var num2 = 10;
console.log("Is num1 not equal num2? I predict true.");
console.log(num1 != num2);
console.log("Is num1 equal num2? I predict false.");
console.log(num1 == num2);
console.log("Is num1 less than num2? I predict true.");
console.log(num1 < num2);
console.log("Is num1 is not less than num2? I predict false.");
console.log(num1 >= num2);
console.log("Is num1 greater than num2? I predict false.");
console.log(num1 > num2);
console.log("Is num1 is not greater than num2? I predict true.");
console.log(num1 <= num2);
console.log("Is num1 less than or equal to num2? I predict true.");
console.log(num1 <= num2);
console.log("Is num1 is not less than or equal to num2? I predict false.");
console.log(num1 > num2);
console.log("Is num1 greater than or equal to num2? I predict false.");
console.log(num1 >= num2);
console.log("Is num1 is not greater than or equal to num2? I predict true.");
console.log(num1 < num2);
var c1 = true;
var c2 = true;
console.log("Is c1 true and c2 true? I predict true.");
console.log(c1 && c2);
console.log("Is c1 true and c2 false? I predict false.");
console.log(c1 && !c2);
console.log("Is c1 true or c2 true? I predict true.");
console.log(c1 || c2);
console.log("Is c1 false or c2 false? I predict false.");
console.log(!(c1 || c2));
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("Is 3 in the array? I predict true.");
console.log(nums.indexOf(3) != -1);
console.log("Is 15 in the array? I predict false.");
console.log(nums.indexOf(15) != -1);
console.log("Is 15 not in the array? I predict true.");
console.log(nums.indexOf(15) == -1);
console.log("Is 3 not in the array? I predict false.");
console.log(nums.indexOf(3) == -1);
