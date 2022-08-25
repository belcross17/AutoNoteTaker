const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

function makeNewNote(body, notesArray){
    const newNote = body;
    if(!Array.isArray(notesArray))
        notesArray = [];
    if(notesArray.length === 0)
        notesArray.push(0);
    
    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote
}

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}.`);
})