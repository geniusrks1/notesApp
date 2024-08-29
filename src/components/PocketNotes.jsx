import React from 'react';
import lock from "../images/Vector (3).png";
import notes from "../images/image-removebg-preview 1.png";

const PocketNotes = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: '#DAE5F5',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            height:'100vh',
            margin: 'auto',
            marginLeft:"25vw"
        },
        image: {
            width: '500px',
            height: 'auto',
            marginBottom: '20px',
        },
        heading: {
            fontSize: '24px',
            color: '#000000',
            marginBottom: '10px',
            fontWeight:"700"
        },
        paragraph: {
            fontSize: '16px',
            color: '#292929',
            lineHeight: '1.5',
            marginBottom: '20px',
            fontWeight:"500"
        },
        footer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#292929',
            borderTop: '1px solid #e0e0e0',
            paddingTop: '10px',
            marginTop: '20px',
            width: '100%',
            fontWeight:"400",
            transform: "translateY(80px)"
        },
        footerImage: {
            width: '16px',
            height: 'auto',
            marginRight: '8px',
        }
    };

    return (
        <div style={styles.container}>
            <img src={notes} alt="Pocket Notes" style={styles.image} />
            <h3 style={styles.heading}>Pocket Notes</h3>
            <p style={styles.paragraph}>
                Send and receive messages without keeping your phone online. <br/>
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
            </p>
            <footer style={styles.footer}>
                <img src={lock} alt="Lock Icon" style={styles.footerImage} />
                end-to-end encrypted
            </footer>
        </div>
    );
}

export default PocketNotes;
