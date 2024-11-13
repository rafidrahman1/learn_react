const myArray=[1,2,3];
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}
const result = copyArrayAndManipulate(myArray, input=>input*2);
console.log(result);
// Output: [ 2, 4, 6 ]
const result2 = copyArrayAndManipulate(myArray, input=>input*10);
console.log(result2);
// Output: [ 10, 20, 30 ]
