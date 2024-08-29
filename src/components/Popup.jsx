import React, { useState, useContext } from 'react';
import { Appcontext } from '../context/AppcontextProvider';
import './Popup.css'; // Assuming you have a separate CSS file

const Popup = () => {
    const { setGroups, setIsPopupOpen, groups } = useContext(Appcontext);
    const [groupName, setGroupName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#6A5ACD', '#FF69B4']; // Sample colors

    const addGroup = () => {
        if (groupName.trim() === '' || groups.some(group => group.name === groupName) || !selectedColor) return;
    
        setGroups([...groups, { name: groupName, color: selectedColor }]);
        setGroupName('');
        setSelectedColor('');
        setIsPopupOpen(false);
    };
    
    return (
        <div className="popup-background" onClick={() => setIsPopupOpen(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h3>Create New Group</h3>
                <div className="form-group">
                    <label>Group Name</label>
                    <input
                        type="text"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        placeholder="Enter Group name..."
                    />
                </div>
                <div className="form-group">
                    <label>Choose Color</label>
                    <div className="color-picker">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                            />
                        ))}
                    </div>
                </div>
                <button onClick={addGroup}>Create</button>
            </div>
        </div>
    );
};

export default Popup;
