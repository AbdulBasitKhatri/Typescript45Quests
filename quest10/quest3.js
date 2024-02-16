/*
Abdul Basit [16-FEB-2024]
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

This program first outputs the name in upper and lower case
*/
var pname = "Abdul Basit";
console.log("lower case: " + pname.toLowerCase());
console.log("upper case: " + pname.toUpperCase());
/*
Now for title case we can split with spaces and i use map function to iterate throguh the array and make uppercase each word's first letter and again join them
*/
function toTitleCase(s) {
    return s.toLowerCase().split(' ').map(function (w) { return (w.charAt(0).toUpperCase() + w.slice(1)); }).join(' ');
}
console.log("title case: " + toTitleCase(pname));
