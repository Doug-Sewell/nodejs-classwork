const fs = require('fs');
const chalk = require('chalk');



const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
    const notes = loadNotes();

    const isDuplicate = notes.find(note => note.title == title);

    if (!isDuplicate) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken.'));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    
    if(notes.length == filteredNotes.length) {
        console.log(chalk.red.inverse('Note title did not exist. No note removed.'))
    } else {
        console.log(chalk.green.inverse('Note removed.'));
        saveNotes(filteredNotes);
    }
}
const listNotes = () => {
    const notes = loadNotes();
    if(notes.length == 0) {
        console.log(chalk.red.inverse('No notes recorded.'))
    } else {
        console.log(chalk.blue.inverse('Your notes:'))
        notes.forEach(note => console.log(note.title));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title == title);

    if(note) {
        console.log(chalk.blue.inverse('Note:'));
        console.log(`Title: ${title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log(chalk.red.inverse('No note with this title found.'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}