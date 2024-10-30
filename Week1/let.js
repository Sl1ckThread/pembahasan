// Let
let age = 10;         // Declare a variable named 'age' and set it to 10
console.log(age);     // Output: 10

age = 11;             // Change the value of 'age' to 11
console.log(age);     // Output: 11

// 'let' is block-scoped
if (true) {
  let favoriteColor = "blue";
  console.log(favoriteColor); // Output: blue
}
// console.log(favoriteColor); // This would give an error, because 'favoriteColor' only exists in the block above.
