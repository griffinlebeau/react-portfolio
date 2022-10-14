import React from 'react';
import twitter from '../../assets/small/twitter.png';
import linkedin from '../../assets/small/linkedin.png';
import github from '../../assets/small/github.png';
import { motion } from 'framer-motion';

const logoClass = {
    height: 40,
    width: 40,
    padding: 20
}

function Footer() {
    return (
        <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ display: 'flex', backgroundColor: '#EDDFEF', justifyContent: 'center', alignItems: 'center' }}>
            <img style={logoClass} src={twitter}
            alt='twitter-logo' />
            <a style={{ textDecoration: 'none' }} href='https://twitter.com/grifleb'>Twitter</a>
            <img style={logoClass} src={linkedin} 
            alt='linkedin-logo' />
            <a style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/griffin-lebeau-147b54245/'>LinkedIn</a>
            <img style={logoClass} src={github}
            alt='github-logo' />
            <a style={{ textDecoration: 'none' }} href='https://github.com/griffinlebeau'>Github</a>
        </motion.div>
    )
};

export default Footer;