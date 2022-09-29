import React from 'react';
import faceImage from '../../assets/large/LeBeau_Griffin_Original.jpg';
function About () {
    return (
        <section>
            <h1>About Me!</h1>
            <img src={faceImage} className="" style={{ width: "100%" }} alt="cover"/>
            <div>
                <p>
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