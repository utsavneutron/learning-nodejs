const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer =>
  console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
});

answerEvents.on("complete", () => process.exit());

/*
What do you need to do before using the "util" module in your code?
=> Add a require() call for it.

A custom module myModule.js exports the function load(). How would you import this function to another module, where you want to run this function by simply calling load()?
=> const { load } = require("./myModule.js");

Which call would properly raise an event for the event handler below?
    Const emitter = new events.EventEmitter();
    emitter.on("trigger", (a, b) => {
    // do something
    });

=> emitter.emit("trigger", "text1", "text2");

What should you provide for the second argument of the question() function in the readline module?
=> a callback function to call when the question is answered

Your program uses the readline module to collect answers to multiple questions. If your code is generally structured as follows, what does the ??? placeholder represent? 
    const questions = [ array of questions ];
    const collectAnswers = (questions, ???) => {
    // collect answers
    };
    collectAnswers(questions, answers => {
    // print answers
    });

=> the function to call when all answers were collected
*/