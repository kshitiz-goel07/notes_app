const yargs = require('yargs')
const { demandOption } = require('yargs')
const notes = require('./notes.js')
const { listnotes } = require('./notes.js')

yargs.command({
    command: 'remove',
    describe : 'REMOVING NOTE',
    buidler: {
     title : {
      describe : 'notes title',
      demandOption : true ,
      type : 'string'
}
    },
    handler(argv)
     { notes.removeNote(argv.title)
    }    

})

yargs.command({
    command:'add',
    describe : 'To add new notes',
    buidler :{
        title :{
            describe:'notes title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:'listNotes',
    describe : 'This will List all of the notes',
    buidler : {
        title : {
            describe : listnotes,
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
       notes.listnotes(argv.title)
    }
})

yargs.command({
    command : 'read',
    describe : 'Find note and print title',
    buidler : {
        title : {
            describe : 'read notes',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
       notes.readNotes(argv.title)
    }
})
yargs.parse()