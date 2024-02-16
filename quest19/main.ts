/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
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

console.log("\nSorry, I can only invite two people for dinner.\n");

while (gList.length > 2) {
  let guest = gList.pop();
  console.log(`Sorry ${guest}, I can't invite you to dinner.`);
}

for (let guest of gList) {
  console.log(`Dear ${guest}, you're still invited to dinner`);
}

console.log('Total number of guests who are invited:',gList.length);
