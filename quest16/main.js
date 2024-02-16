/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
var gList = ["A. Basit", "M. Atif", "A. Lateef"];
for (var _i = 0, gList_1 = gList; _i < gList_1.length; _i++) {
    var guest = gList_1[_i];
    console.log("Dear ".concat(guest, ", i would like to invite you to dinner."));
}
console.log("\n".concat(gList[0], " can't make it today!\n"));
gList[0] = "M. Hammad";
for (var _a = 0, gList_2 = gList; _a < gList_2.length; _a++) {
    var guest = gList_2[_a];
    console.log("Dear ".concat(guest, ", i would like to invite you to dinner."));
}
console.log('\nI found a big dinner table');
gList.unshift("M. Sami");
gList.splice(Math.floor(gList.length / 2), 0, "M. Zain");
gList.push("M. Shabih");
for (var _b = 0, gList_3 = gList; _b < gList_3.length; _b++) {
    var guest = gList_3[_b];
    console.log("Dear ".concat(guest, ", i would like to invite you to dinner."));
}
