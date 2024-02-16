/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/

let gList: string[] = ["A. Basit", "M. Atif", "A. Lateef"];

for(let guest of gList){
    console.log(`Dear ${guest}, i would like to invite you to dinner.`);
}
