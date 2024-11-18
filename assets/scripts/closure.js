function outer() {
  let v =0;
  function inner() {v++; console.log(v);}
  return inner;
}
const newFunction = outer();
newFunction();
newFunction();
