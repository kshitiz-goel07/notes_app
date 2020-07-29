const fs = require('fs')
const { timeLog } = require('console')
const chalk = require('chalk')

const getNotes =  function() {
        return 'Getting Notes..'
    }
const addNotes = function(title , body){
    const notes = loadNotes()
    const duplicatenotes = notes.filter(function(note){
        return note.title === title 
    })

     if (duplicatenotes.length === 0 )
     {
        notes.push({
            title: title,
            body : body
        })
   
       savenotes(notes)
       console.log('New Notes Added')
    }
    else
    console.log('Same title name already exist !!')
}

const removeNote = function(title){
    const notes = loadNotes()
     const notesToKeep = notes.filter(function(note){
         return note.title !== title 
         // console.log('NO NOTE FOUND')
     })

     if ( notes.length > notesToKeep.length)
     {
         console.log(chalk.green.inverse('note is removed'))
         savenotes(notesToKeep)
     }
     else
     {
         console.log(chalk.red.inverse('Note Not found'))
     }
    
}



const savenotes = function(notes){
const dataJSON = JSON.stringify(notes)
fs.writeFileSync("notes.json",dataJSON)
}

const loadNotes = function(){
    try{
        const data = fs.readFileSync('notes.json')
    const databuffer = data.toString()
    return JSON.parse(databuffer) 
    }
    catch(e){
        return []
    } 
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNote : removeNote
}