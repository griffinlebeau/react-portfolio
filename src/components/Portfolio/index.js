import React from 'react';
import Zero from '../../assets/projects/0.jpg';
import One from '../../assets/projects/1.jpg';
import Two from '../../assets/projects/2.jpg';
import Three from '../../assets/projects/3.jpg';
import Four from '../../assets/projects/4.jpg';
import Five from '../../assets/projects/5.jpg';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: "ReadMe Generator",
            description: "Command line prompt based ReadMe builder put together with Node.js",
            repo: "https://github.com/griffinlebeau/readme-builder",
            deployed: "",
            tech: "Node.js | JavaScript",
            walkthrough: "",
            stack: "Back-end"
        },
        {
            title: "E-commerce Database Template",
            description: "A basic 3 table MySQL back-end database ready to be connected to front-end code to serve a business's product data",
            repo: "https://github.com/griffinlebeau/ecommerce-backend",
            deployed: "",
            tech: "SQL | MySQL | JavaScript",
            walkthrough: "https://drive.google.com/file/d/1XH-EWZe3IWwhG8vjKTDodfqkIB3dbhS_/view",
            stack: "Back-end"
        },
        {
            title: "Github Lite",
            description: "Platform for developers to post projects to showcase for potential employers, as well as other developers",
            repo: "https://github.com/cjpritch/github-lite",
            deployed: "https://github-lite-1.herokuapp.com/",
            tech: "GraphQL | React | MongoDB | Node.js",
            walkthrough: "",
            stack:  "Full-stack"
        },
        {
            title: "Boilerplate Social Media API",
            description: "Template back-end database for a simple API featuring users, thoughts (posts), reactions (replies to posts), and friends (other users) built with MongoDB and Mongoose",
            repo: "https://github.com/griffinlebeau/social-media-api",
            deployed: "",
            tech: "MongoDB | Express | JavaScript | Node.js",
            walkthrough: "https://drive.google.com/file/d/1qyrvnDCy3d-qljvwZaim_MA3Al_8i3Xt/view",
            stack: "Back-end"
        },
        {
            title: "Tech And Such",
            description: "Full stack MVC blog web app with multiple users interaction deployed to cloud",
            repo: "https://github.com/griffinlebeau/tech-and-such",
            deployed: "https://tech-and-such.herokuapp.com/",
            tech: "MySQL | Handlebars.js | JavaScript",
            walkthrough: "",
            stack: "Full-stack"
        },
        {
            title: "React Profile",
            description: "React powered portfolio with simple component and state usage",
            repo: "https://github.com/griffinlebeau/react-portfolio",
            deployed: "",
            tech: "Node.js | React",
            walkthrough: "",
            stack: "Front-end"
        }
    ];
    return (
        <div className='main'>
            <div style={{ display: 'flex', backgroundColor: '#D5CFE1', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around' }}>
                    <motion.div 
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    initial={{ opacity: 0.7, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ width: '30%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <h2 style={{ boxShadow: '0 4px 8px 0px rgba(0,0,0,0.2)', borderBottom: '5px solid black', paddingBottom: '5px'}}>{projects[0].title}</h2>
                        <p style={{ padding: '5px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#72ddf7', borderRadius: '5px' }}>{projects[0].description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <span style={{ backgroundColor: '#26081C', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[0].stack}</span>
                            <h4 style={{ backgroundColor: '#380036', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[0].tech}</h4>
                        </div>
                        <img style={{ width: '90%', margin: '10px', border: '5px solid #72ddf7', borderRadius: '10px' }} src={Zero}
                        alt={projects[0].title}
                        key={projects[0].title} />
                        <a style={{ textDecoration: 'none', color: 'black', }} href={projects[0].repo}>Repository</a> 
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                    style={{ width: '30%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <h2 style={{ boxShadow: '0 4px 8px 0px rgba(0,0,0,0.2)', borderBottom: '5px solid black', paddingBottom: '5px'}}>{projects[1].title}</h2>
                        <p style={{ padding: '5px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#72ddf7', borderRadius: '5px' }}>{projects[1].description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <span style={{ backgroundColor: '#26081C', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[1].stack}</span>
                            <h4 style={{ backgroundColor: '#380036', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[1].tech}</h4>
                        </div>
                        <img style={{ width: '90%', margin: '10px', border: '5px solid #72ddf7', borderRadius: '10px' }} src={One}
                        alt={projects[1].title}
                        key={projects[1].title} />
                        <a style={{ textDecoration: 'none', color: 'black', }} href={projects[1].repo}>Repository</a> | <a style={{ textDecoration: 'none', color: 'black', }} href={projects[0].walkthrough}>Walkthrough</a>
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                    style={{ width: '30%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <h2 style={{ boxShadow: '0 4px 8px 0px rgba(0,0,0,0.2)', borderBottom: '5px solid black', paddingBottom: '5px'}}>{projects[2].title}</h2>
                            <p style={{ padding: '5px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#72ddf7', borderRadius: '5px' }}>{projects[2].description}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <span style={{ backgroundColor: '#26081C', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[2].stack}</span>
                                <h4 style={{ backgroundColor: '#380036', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[2].tech}</h4>
                            </div>
                        <img style={{ width: '90%', margin: '10px', border: '5px solid #72ddf7', borderRadius: '10px' }} src={Two}
                        alt={projects[2].title}
                        key={projects[2].title} />
                        <a style={{ textDecoration: 'none', color: 'black', }} href={projects[2].repo}>Repository</a> | <a style={{ textDecoration: 'none', color: 'black', }} href={projects[2].deployed}>Deployed</a>
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
                    style={{ width: '30%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                       <h2 style={{ boxShadow: '0 4px 8px 0px rgba(0,0,0,0.2)', borderBottom: '5px solid black', paddingBottom: '5px'}}>{projects[3].title}</h2>
                            <p style={{ padding: '5px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#72ddf7', borderRadius: '5px' }}>{projects[3].description}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <span style={{ backgroundColor: '#26081C', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[3].stack}</span>
                                <h4 style={{ backgroundColor: '#380036', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[3].tech}</h4>
                            </div>
                        <img style={{ width: '90%', margin: '10px', border: '5px solid #72ddf7', borderRadius: '10px' }} src={Three}
                        alt={projects[3].title}
                        key={projects[3].title} />
                        <a style={{ textDecoration: 'none', color: 'black' }} href={projects[3].repo}>Repository</a> | <a style={{ textDecoration: 'none', color: 'black', }} href={projects[0].walkthrough}>Walkthrough</a>
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
                    style={{ width: '30%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <h2 style={{ boxShadow: '0 4px 8px 0px rgba(0,0,0,0.2)', borderBottom: '5px solid black', paddingBottom: '5px'}}>{projects[4].title}</h2>
                            <p style={{ padding: '5px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#72ddf7', borderRadius: '5px' }}>{projects[4].description}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <span style={{ backgroundColor: '#26081C', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[4].stack}</span>
                                <h4 style={{ backgroundColor: '#380036', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[4].tech}</h4>
                            </div>
                        <img style={{ width: '90%', margin: '10px', border: '5px solid #72ddf7', borderRadius: '10px' }} src={Four}
                        alt={projects[4].title}
                        key={projects[4].title} />
                        <a style={{ textDecoration: 'none', color: 'black' }} href={projects[4].repo}>Repository</a> | <a style={{ textDecoration: 'none', color: 'black', }} href={projects[4].deployed}>Deployed</a>
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
                    style={{ width: '30%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                       <h2 style={{ boxShadow: '0 4px 8px 0px rgba(0,0,0,0.2)', borderBottom: '5px solid black', paddingBottom: '5px'}}>{projects[5].title}</h2>
                            <p style={{ padding: '5px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#72ddf7', borderRadius: '5px' }}>{projects[5].description}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <span style={{ backgroundColor: '#26081C', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[5].stack}</span>
                                <h4 style={{ backgroundColor: '#380036', color: 'white', padding: '5px', borderRadius: '5px'}}>{projects[5].tech}</h4>
                            </div>
                        <img style={{ width: '90%', margin: '10px', border: '5px solid #72ddf7', borderRadius: '10px' }} src={Five}
                        alt={projects[5].title}
                        key={projects[5].title} />
                        <a style={{ textDecoration: 'none', color: 'black', }}href={projects[5].repo}>Repository</a> 
                    </motion.div>
            </div>
           
        </div>
    )
}
export default Portfolio;