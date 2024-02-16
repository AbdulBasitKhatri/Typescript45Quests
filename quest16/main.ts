/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

let gList: string[] = ["A. Basit", "M. Atif", "A. Lateef"];

for(let guest of gList){
    console.log(`Dear ${guest}, i would like to invite you to dinner.`);
}

console.log(`\n${gList[0]} can't make it today!\n`);
gList[0] = "M. Hammad";

for(let guest of gList){
    console.log(`Dear ${guest}, i would like to invite you to dinner.`);
}

console.log('\nI found a big dinner table');

gList.unshift("M. Sami");
gList.splice(Math.floor(gList.length / 2), 0, "M. Zain");
gList.push("M. Shabih");

for(let guest of gList){
    console.log(`Dear ${guest}, i would like to invite you to dinner.`);
}
