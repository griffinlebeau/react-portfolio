import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Main ({currentPage}) {

    if(currentPage === "about"){
        return (
            <About></About>
        )
    }
    if(currentPage === "contact"){
        return (
            <Contact></Contact>
        )
    }
    if(currentPage === "portfolio"){
        return (
            <Portfolio></Portfolio>
        )
    }
    if(currentPage === "resume"){
        return (
            <Resume></Resume>
        )
    }
}

export default Main;