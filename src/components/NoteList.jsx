import React, { useContext, useState } from 'react';
import { Appcontext } from '../context/AppcontextProvider';
import arrow from '../images/Arrow 4.png';  
import { IoSend } from "react-icons/io5";

const NoteList = () => {
    const { notes, setNotes, selectedGroup } = useContext(Appcontext);
    const [noteText, setNoteText] = useState('');

    const addNote = () => {
        if (noteText.trim() === '') return;

        const newNote = {
            text: noteText,
            createdAt: new Date().toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            }).replace(',', ''), 
        };
        
        

        const updatedNotes = {
            ...notes,
            [selectedGroup]: [...(notes[selectedGroup] || []), newNote]
        };

        setNotes(updatedNotes);
        setNoteText('');
    };

    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#F5F5F5',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            width:"73vw",
            margin: '20px auto',
            marginLeft:"25vw"
         
        },
        heading: {
            fontSize: '24px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '20px',
            textAlign: 'center',
           
        },
        list: {
            listStyle: 'none',
            padding: '0',
            marginBottom: '20px',
        },
        listItem: {
            backgroundColor: '#FFF',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '80px',  // Adjust based on desired height
            position: 'relative',
            
        },
        noteText: {
            fontSize: '16px',
            color: '#555',
            marginBottom: '10px',
        },
        noteTimestamp: {
            fontSize: '12px',
            color: '#999',
            position: 'absolute',
            bottom: '10px',
            right: '10px',
        },

        inputContainer: {
            position: 'sticky',
            width: '100%',
            bottom:"0px",
            boxSizing: 'border-box',
            
        },

        button: {
            position: 'absolute',
            right: '5px',
            bottom: '5px',

            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: "white" ,  
            cursor: noteText.trim() ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            resize: 'none',
            
        },
        textarea: {
            width: '100%',        
            height: '200px',      
            padding: '10px', 
            borderRadius: '5px',
            border: '1px solid #CCC',
            fontSize: '16px',
            lineHeight: 'normal',
            boxSizing: 'border-box',
            resize: 'none',  // Prevents resizing if you want a fixed size
        },
        arrowImage: {
            width: '30px',
            height: '30px',
            color: noteText.trim() ? '#001F8B' : '#CCCCCC',  
          
        },
     
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}> {selectedGroup}</h3>
            <ul style={styles.list}>
                {(notes[selectedGroup] || []).map((note, index) => (
                    <li key={index} style={styles.listItem}>
                        <p style={styles.noteText}>{note.text}</p>
                        <small style={styles.noteTimestamp}>{note.createdAt}</small>
                    </li>
                ))}
            </ul>
            <div style={styles.inputContainer}>
            <textarea 
                value={noteText} 
                onChange={(e) => setNoteText(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && addNote()}
                placeholder="Enter your note..." 
                style={styles.textarea}  // Use the new textarea style
            />
                <button 
                    onClick={addNote} 
                    style={styles.button} 
                    disabled={!noteText.trim()}  // Disable button when input is empty
                >
                    <IoSend style={styles.arrowImage} />
                </button>
            </div>
        </div>
    );
};

export default NoteList;
