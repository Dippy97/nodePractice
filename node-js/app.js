// ** file create and append
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'write file sync execute')
// fs.appendFileSync('notes.txt', 'append on the same file')

// **import own files and export function with return value 
// const getNotes = require('./utils')
// const note = getNotes('app file is calling, ')
// console.log(note)

// ** use npm package validator
// const validator = require('validator')
// console.log(validator.isEmail('gmail.com'))
// console.log(validator.isURL('this.in'))

// ** use npm package chalk
// const chalk = require('chalk')
// console.log(chalk.red('error'))

// ** argument from terminal
// const argument = process.argv[2]
// if(argument == 'title'){
//     console.log(argument)
// }else if(argument== 'name'){
//     console.log(argument)
// }

const yargs = require('yargs')

// customize yargs version
 yargs.version('1.1.0')
// console.log(yargs.argv)

//customize add command
const getNotes = require('./utils')
yargs.command({
    command: 'add',
    describe: 'new add command',
    builder: {
        title:{
            describe:"title for note",
            demandOption: true,
            type:'string'
        },
        body:{
            describe:"body for note",
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv) {
        console.log('new note adding')
        getNotes(argv.title,argv.body)
    }
})

//customize remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function() {
        console.log('note removing')
    }
})

//customize list command
yargs.command({
    command: 'list',
    describe: 'list your note',
    handler: function() {
        console.log('note list format')
    }
})

//customize read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('note reading')
    }
})

//console.log(yargs.argv)
yargs.parse()
