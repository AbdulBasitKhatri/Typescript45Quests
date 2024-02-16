/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

let myArray: string[] = ["A", "B", "C"];
/*
TypeError: Cannot read properties of undefined (reading 'toLowerCase')
because the index is not valid
console.log(myArray[100].toLowerCase());
*/
console.log(myArray[0].toLowerCase());
