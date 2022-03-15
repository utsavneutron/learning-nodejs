/*
Reading info in a json file

var fs = require('fs')
var data = require('./package.json')

console.log(data.name)

fs.readFile('./package.json', 'utf-8', (err,data) => {
    var data = JSON.parse(data) //without this line it will just be a string so we need to parse
    console.log(data.name)
})
*/

/*
Reading directories

var fs = require('fs')

fs.readdir("c:/", (err, data)  => {
    console.log(data)
})
*/

/*
Writing to File

var fs = require('fs')

var data = {
    name: 'Bob'
}

fs.writeFile('data.json', JSON.stringify(data), (err) =>{
    console.log('write finished',err)
})
*/
