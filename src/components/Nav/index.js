import React from 'react';

var aboutActive = true;
var contactActive = false;
var portfolioActive = false;
var resumeActive = false;

function Nav({currentPage, setCurrentPage}) {
    if(currentPage === 'about'){
        aboutActive = true;
        contactActive = false;
        portfolioActive = false;
        resumeActive = false;
    }
    if(currentPage === 'contact'){
        contactActive = true;
        aboutActive = false;
    } else {
        contactActive = false;

    };
    if(currentPage === 'portfolio'){
        portfolioActive = true;
        aboutActive = false;
    } else {
        portfolioActive = false;
    };
    if(currentPage === 'resume'){
        resumeActive = true;
        aboutActive = false;
    } else {
        resumeActive = false;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: 10 }}>
            <div className={`${aboutActive && 'navActive'}`}>
                <p
                
                onClick={() => setCurrentPage('about')}>About</p>
            </div>
            <div className={`${contactActive && 'navActive'}`}>
                <p
                
                onClick={() => setCurrentPage('contact')}>Contact</p>
            </div>
            <div  className={`${portfolioActive && 'navActive'}`}>
                <p 
               
                onClick={() => setCurrentPage('portfolio')}>Portfolio</p>
            </div>
            <div className={`${resumeActive && 'navActive'}`}>
                <p
                
                onClick={() => setCurrentPage('resume')}>Resume</p>
            </div>
        </div>
    );
};

export default Nav