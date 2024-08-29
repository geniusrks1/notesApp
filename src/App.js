
import React, { useContext } from 'react';
import GroupList from './components/GroupList';
import NoteList from './components/NoteList';
import Popup from './components/Popup';
import { Appcontext } from './context/AppcontextProvider';
import PocketNotes from './components/PocketNotes';
const App = () => {
    const { isPopupOpen, selectedGroup } = useContext(Appcontext);

    return (
        <div>
            <GroupList />
            {selectedGroup ? <NoteList /> : <PocketNotes/>}
            {isPopupOpen && <Popup />}
        </div>
    );
};

export default App;

