/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
console.log("\nSorry, I can only invite two people for dinner.\n");
while (gList.length > 2) {
    var guest = gList.pop();
    console.log("Sorry ".concat(guest, ", I can't invite you to dinner."));
}
for (var _c = 0, gList_4 = gList; _c < gList_4.length; _c++) {
    var guest = gList_4[_c];
    console.log("Dear ".concat(guest, ", you're still invited to dinner"));
}
gList.pop();
gList.pop();
console.log("guest list after removing both remaining names: ", gList);
