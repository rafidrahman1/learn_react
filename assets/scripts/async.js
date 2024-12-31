function helloGoodbye(){
  console.log('hello');
}

function delayedGreet() {
  setTimeout(helloGoodbye, 3000);
  console.log('good bye');
  // ADD CODE HERE
}
// Uncomment the following line to check your work!
delayedGreet(); // should log: 'good bye' then 'hello' after 3 seconds