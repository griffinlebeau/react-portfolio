import React from 'react';
import About from '../About';
import ContactForm from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';


function Main ({currentPage}) {
    let current = <About></About>;
    if(currentPage === 'contact'){
        current = <ContactForm></ContactForm>
    };
    if(currentPage === 'portfolio'){
        current = <Portfolio></Portfolio>
    };
    if(currentPage === 'resume'){
        current = <Resume></Resume>
    }
    return (current)
    }

export default Main;