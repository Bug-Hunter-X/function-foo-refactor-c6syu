function foo(a, b) {
  if (a === null || b === null) {
    return null; //Correct return statement
  }
  return a + b;
}
console.log(foo(1, null)); // Expected output: null, Actual output: null