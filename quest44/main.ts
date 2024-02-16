/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

function make_sandwich(...items: string[]): void {
  console.log("Sandwich with order:");
  for(let item of items){
    console.log(`*) ${item}`);
  }
}

make_sandwich("chicken", "cheese", "lettuce");
make_sandwich("chicken", "tomato");
make_sandwich("chicken", "cucumber", "ketchup", "BBQ sauce");
