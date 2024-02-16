/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
  let car: { manufacturer: string, model: string, [key: string]: any } = { manufacturer, model };
  for (let extra of extras) {
    for (let key in extra) {
      car[key] = extra[key];
    }
  }
  return car;
}
console.log(car_info("Ferrari", "LaFerrari"));
console.log(car_info("Lamborghini", "Aventador", { color: "red" }));
console.log(car_info("Bugatti", "Chiron", { color: "black" }, { turbo: true }));
