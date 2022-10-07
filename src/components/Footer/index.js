import React from 'react';
import twitter from '../../assets/small/twitter.png';
import linkedin from '../../assets/small/linkedin.png';
import github from '../../assets/small/github.png';

const logoClass = {
    height: 40,
    width: 40,
    padding: 20
}

function Footer() {
    return (
        <div style={{ backgroundColor: '#99F7AB', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={logoClass} src={twitter}
            alt='twitter-logo' />
            <a style={{ textDecoration: 'none' }} href='https://twitter.com/grifleb'>Twitter</a>
            <img style={logoClass} src={linkedin} 
            alt='linkedin-logo' />
            <a style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/griffin-lebeau-147b54245/'>LinkedIn</a>
            <img style={logoClass} src={github}
            alt='github-logo' />
            <a style={{ textDecoration: 'none' }} href='https://github.com/griffinlebeau'>Github</a>
        </div>
    )
};

export default Footer;