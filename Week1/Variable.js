// Var
var name = "Alice";  // Declare a variable named 'name' and set it to "Alice"
console.log(name);    // Output: Alice

name = "Bob";         // Change the value of 'name' to "Bob"
console.log(name);    // Output: Bob

// var can be used anywhere in this function
function greet() {
  var greeting = "Hello"; 
  console.log(greeting + ", " + name); // Output: Hello, Bob
}
greet();

