function foo(a, b) {
  if (a === null || b === null) {
    return null; //Incorrect return statement
  }
  return a + b;
}
console.log(foo(1, null)); // Expected output: null, Actual output: 1