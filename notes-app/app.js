const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
//Customize yargs version:
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string',
        }
    },
    describe: 'Add a new note',
    handler: (argv) => notes.addNote(argv.title, argv.body)
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
});

//Create list command
yargs.command({
    command:'list',
    description:'Listing notes',
    handler: () => console.log('Here\'s your notes!')
});

//Create read command
yargs.command({
    command:'read',
    description:'Here\'s your note!',
    handler:() => console.log('Here\'s your note!')
})


//add, remove, read, list



yargs.parse();

//console.log(yargs.argv);
