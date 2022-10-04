const hello = ( who )=> console.log('Hello ' + who );

// this function called delay takes two params (the function to execute and the delay before running it) and captures the arguments for that function
// it then runs it with the specified timeout, all using the shorthand arrow syntax
const delay = (func, ms) => (...arg) => setTimeout(()=> func.apply(null, arg), ms)

const delayHello = delay(hello, 300);
delayHello('world');

