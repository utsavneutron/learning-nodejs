const stream = require('stream');
let i = 0

function setupStreams(dataInputStream, dataOutputStream, callback) {
  // Write your code here
  stream.pipeline(dataInputStream,dataOutputStream,callback)
}

let readable = new stream.Readable();
let writable = new stream.Writable({  objectMode: true, 
                                      write: (chunk, encoding, callback) => {
                                        ++i
                                        console.log(chunk);
                                        callback(null, true);
                                      }
});


setupStreams(readable, writable, () => console.log("onEnd"));

readable.push(`{ "log": "Request received", "id": ${i} }`);
readable.push(null);
module.exports.setupStreams = setupStreams;

// const { Readable, Writable, pipeline } = require('stream')
// let i = 1

// function* generate() {
//   yield `{ "log": "Request received", "id": ${i} }`
//   yield `{ "log": "second", "id": ${i}}`
//   yield `{ "log": "third", "id": ${i} }`
// }

// function setupStreams(dataInputStream, dataOutputStream, callback) {
//   pipeline(dataInputStream, dataOutputStream, callback)
// }

// let readable = Readable.from(generate())

// let writable = new Writable({
//   objectMode: true,
//   write: (chunk, encoding, callback) => {
//     ++i
//     console.log('chunk', chunk.toString())
//     callback(null, true)
//   },
// })

// setupStreams(readable, writable, () => console.log('onEnd'))