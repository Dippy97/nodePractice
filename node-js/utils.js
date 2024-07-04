const fs = require('fs')
const getNotes = function(title, body) {
    const notes = fromNotes()
    existNote = notes.filter(function(obj){ return obj.title == title})
    //console.log(notes, title,existNote,'234567890')
    const note = {
        title: title,
        body: body
    }
    if(existNote.length == 0){
        notes.push(note)
        submitNotes(JSON.stringify(notes))
    }
    else{
        console.log('same title data exist')
    }
}

const submitNotes = function(notes){
    console.log("=============", notes)
    fs.writeFileSync('./notes.json', notes)
}

const fromNotes = function(){
    try{
        const bufferData = fs.readFileSync('notes.json')
    const data = JSON.parse(bufferData.toString())
    return data
    }
    catch{
        return []
    }
}

module.exports = getNotes