/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
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
