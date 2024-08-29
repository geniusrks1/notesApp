import React, { useContext, useState } from 'react';
import { Appcontext } from '../context/AppcontextProvider';
import groupImage from '../images/Group 24.png';

const GroupList = () => {
    const { groups, setSelectedGroup, setIsPopupOpen } = useContext(Appcontext);
    const [selectedGroupName, setSelectedGroupName] = useState(null);

    const getAbbreviation = (group) => {
        if (!group || !group.name) return '';

        const words = group.name.split(' ');
        if (words.length > 1) {
            return `${words[0][0]}${words[1][0]}`.toUpperCase();
        } else {
            return group.name.slice(0, 2).toUpperCase();
        }
    };

    const handleGroupClick = (group) => {
        setSelectedGroup(group.name);
        setSelectedGroupName(group.name);
    };

    const styles = {
        container: {
            width: '25vw',
            height: '100vh',
            backgroundColor: 'lightgrey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'fixed',
            left: 0,
            top: 0,
            padding: '20px',
            boxSizing: 'border-box',
            fontFamily: 'Roboto, sans-serif',
        },
        header: {
            marginBottom: '20px',
        },
        list: {
            flexGrow: 1,
            overflowY: 'auto',
            marginBottom: '20px',
            paddingLeft: '0',
        },
        listItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            cursor: 'pointer',
            backgroundColor: (group) => group.name === selectedGroupName ? '#e0e0e0' : 'transparent',
            borderRadius: '5px',
            padding: '5px',
        },
        circularBox: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
            fontWeight: 'bold',
        },
        rectangularBox: {
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '5px',
            flexGrow: 1,
        },
        button: {
            alignSelf: 'flex-end',
            position: 'sticky',
            bottom: 0,
            right: 0,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
        },
        img: {
            width: '40px',
            height: '40px',
        },
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.header}>Pocket Notes</h3>
            <ul style={styles.list}>
                {groups.map((group, index) => (
                    <li
                        key={index}
                        style={{ ...styles.listItem, backgroundColor: group.name === selectedGroupName ? 'rgba(47, 47, 47, 0.17)' : 'transparent' }}
                        onClick={() => handleGroupClick(group)}
                    >
                        <div style={{ ...styles.circularBox, backgroundColor: group.color }}>
                            {getAbbreviation(group)}
                        </div>
                        <div style={styles.rectangularBox}>
                            {group.name}
                        </div>
                    </li>
                ))}
            </ul>
            <button style={styles.button} onClick={() => setIsPopupOpen(true)}>
                <img style={styles.img} src={groupImage} alt="image not found" />
            </button>
        </div>
    );
};

export default GroupList;
