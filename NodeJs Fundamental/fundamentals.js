/*
Modern Web Apps and Sites
- Front End Components
- Components are typically written in JavaScript

Benefits of JavaScript
    - Syntax is the same
    - Shared Code - Front end and Back end
    - Dynamic Language
    - Works well with JSON

Examples of Sharing
    - Shared Library
    - Custom function or algorithm
    - Data Structure or object definitions

Synchronous Task - Wait for a task for previous task is finished
Asynchronous Task - Doesn't wait
*/
/*
Synchronous
fs = require('fs');

data = fs.readdirSync('c:/');
console.log('data:', data);
console.log("this comes after");
*/

/*
Asynchronous

fs = require('fs');

function phoneNumber(err,data) {
    console.log('data:', data);
}

fs.readdir('c:/', phoneNumber);

console.log("this comes after");

*/