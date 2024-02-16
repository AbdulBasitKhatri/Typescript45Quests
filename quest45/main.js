/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            car[key] = extra[key];
        }
    }
    return car;
}
console.log(car_info("Ferrari", "LaFerrari"));
console.log(car_info("Lamborghini", "Aventador", { color: "red" }));
console.log(car_info("Bugatti", "Chiron", { color: "black" }, { turbo: true }));
