import React from 'react';
import faceImage from '../../assets/large/LeBeau_Griffin_Original.jpg';
function About () {
    return (
        <section style={{ display: 'flex', height: '40', justifyContent: 'space-around', flex: 'wrap' }} >
            <h1 style={{width: '5%' }}>About Me!</h1>
            <img src={faceImage} className="" style={{ width: '20%', padding: 10 }} alt="cover"/>
            <div style={{ width: '60%' }}>
                <p style={{ lineHeight: 3 }}>
                    I am a full stack website developer with education in the MERN stack.
                    When developing with the MERN stack; MongoDB serves as the database 
                    portion paired with Express.js to round out the back-end, while React.js 
                    serves up the front-end, and Node.js fills in the functionality gaps.
                </p>
            </div>
        </section>
    )
};
export default About;