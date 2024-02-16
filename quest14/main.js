/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
var gList = ["A. Basit", "M. Atif", "A. Lateef"];
for (var _i = 0, gList_1 = gList; _i < gList_1.length; _i++) {
    var guest = gList_1[_i];
    console.log("Dear ".concat(guest, ", i would like to invite you to dinner."));
}
