import { motion } from 'framer-motion';
import React from 'react';
import faceImage from '../../assets/large/LeBeau_Griffin_Original.jpg';
function About () {
    return (
        
        <section style={{ backgroundColor: '#D5CFE1', display: 'flex', height: '40', justifyContent: 'space-around', flex: 'wrap', alignItems: 'center' }} >
            <motion.div
                    initial={{ opacity: 0.5, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                <div style={{ display: 'flex', height: '40', justifyContent: 'space-around', flex: 'wrap', alignItems: 'center' }}>
                    <img src={faceImage} className="" style={{ border: '10px solid #72ddf7', width: '25%', height: '25%', margin: '10px', borderRadius: '10px' }} alt="cover"/>
                    <div style={{ width: '60%', height: '60%', backgroundColor: '#EFBC9B', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '5px', margin: '10px',  }}>
                        <h1 style={{ paddingLeft: '30%', width: '40%', textAlign: 'center' }}>About Me!</h1>
                        <p style={{ lineHeight: 3, padding: '2px' }}>
                        I am a Chicago native with a passion for designing accessible and efficient software that runs on any device. I believe everybody should have equal access to technology and services that make every day life easier. I favor application design that provides the same user experience regardless of device hardware, browser, or connection. 

        In my free time I enjoy expressing myself creatively by any means possible. Some of my preferred creative outlets include music production using FL Studio, video/content production using Adobe After Effects & Premiere Pro, and giving myself tattoos using my self-taught knowledge.

                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
};
export default About;