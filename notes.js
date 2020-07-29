const fs = require('fs')
const { timeLog } = require('console')
const chalk = require('chalk')

const getNotes =  () =>  'Getting Notes..'

const addNotes = (title , body) => {
    const notes = loadNotes()
   // const duplicatenotes = notes.filter((note) => note.title === title )
      const duplicatenote = notes.find((note) => note.title === title)

      debugger

     if (!duplicatenote )
     {
        notes.push({
            title: title,
            body : body
        })
   
       savenotes(notes)
       console.log(chalk.green.inverse('New Notes Added'))
    }
    else
    console.log('Same title name already exist !!')
}

const removeNote = (title)=> {
    const notes = loadNotes()
     const notesToKeep = notes.filter((note) => note.title !== title )
         // console.log('NO NOTE FOUND')
     

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

const listnotes=() => {
    console.log(chalk.yellow.inverse("Your Notes"))

    const notes = loadNotes()
    notes.forEach((note)=> {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title) 
    if (note) {
        console.log(chalk.italic.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.yellow.inverse('Note not found!!'))
    }
}



const savenotes = (notes) => {
const dataJSON = JSON.stringify(notes)
fs.writeFileSync("notes.json",dataJSON)
}

const loadNotes = ()=> {
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
    removeNote : removeNote,
    listnotes : listnotes,
    readNotes : readNotes
}