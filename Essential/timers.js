const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime/waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);

/*
Your program uses the following function to process user input. What is this function missing?
process.stdin.on("data", data => {
  results.push(data.toString().trim());
});
=> some logic to stop processing input when a certain condition is met

Which statement is true regarding the following simple program?
let text="hi there";
console.log(text);
=> This program can be executed from a terminal.

Which call will you make to set a four-second timer, then call the function progress() when it expires?
=> setTimeout(progress, 4000);

Why is it important to store the value returned by the call to setInterval()?
=> to be able to clear this specific interval later

Which code is equivalent to console.log("hello")?
=>process.stdout.write("hello\n");

Which code will load the path module into a constant variable called mymodule?
=> const mymodule=require("path");

What should come instead of the ??? placeholder for this function to return the value of an argument variable given its flag (e.g., for the provided argument --user john, grab("--user") will return john)?
const grab = flag => {
  let index = ???;
  return process.argv[index];

=> process.argv.indexOf(flag) + 1
};
*/