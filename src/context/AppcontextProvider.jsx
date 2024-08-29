import React, { createContext, useState, useEffect } from 'react';

export const Appcontext=createContext();

const AppcontextProvider = ({children}) => {
  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || {});
  const [selectedGroup, setSelectedGroup] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState({
//     name: null,
//     shorterName: null,
//     color: null,
// });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
}, [groups]);

useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
}, [notes]);

    
    return (
    <Appcontext.Provider
    value={{ groups,
        setGroups,
        notes,
        setNotes,
        selectedGroup,
        setSelectedGroup,
        isPopupOpen,
        setIsPopupOpen}}
    >{children}</Appcontext.Provider>
  )
}

export default AppcontextProvider;