/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
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
