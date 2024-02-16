//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let pname: string = "Abdul Basit";

console.log("lower case: "+pname.toLowerCase());
console.log("upper case: "+pname.toUpperCase());

//For title case we can split with spaces and uppercase each word's first letter and again join them

function toTitleCase(s: string): string {
  return s.toLowerCase().split(' ').map(function(w) {
    return (w.charAt(0).toUpperCase() + w.slice(1));
  }).join(' ');
}

console.log("title case: "+toTitleCase(pname));
