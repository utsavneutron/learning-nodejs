console.log(process.pid)
console.log(process.versions.node)

const [, , firstName, lastName] = process.argv
console.log(`Your name is ${firstName} ${lastName}`)

