import React, { useContext, useState } from 'react';
import { Appcontext } from '../context/AppcontextProvider';

const NoteList = () => {
    const { notes, setNotes, selectedGroup } = useContext(Appcontext);
    const [noteText, setNoteText] = useState('');

    const addNote = () => {
        if (noteText.trim() === '') return;

        const newNote = {
            text: noteText,
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString()
        };

        const updatedNotes = {
            ...notes,
            [selectedGroup]: [...(notes[selectedGroup] || []), newNote]
        };

        setNotes(updatedNotes);
        setNoteText('');
    };

    return (
        <div>
            <h3>Notes for {selectedGroup}</h3>
            <ul>
                {(notes[selectedGroup] || []).map((note, index) => (
                    <li key={index}>
                        <p>{note.text}</p>
                        <small>Created: {note.createdAt}</small>
                        <br />
                        <small>Last Updated: {note.updatedAt}</small>
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                value={noteText} 
                onChange={(e) => setNoteText(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && addNote()}
                placeholder="Enter your note..."
            />
            <button onClick={addNote}>Enter</button>
        </div>
    );
};

export default NoteList;
