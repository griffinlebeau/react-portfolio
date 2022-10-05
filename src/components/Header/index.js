import React from "react";
import Nav from './../Nav';

function Header({currentPage, setCurrentPage}){
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '20%' }}>
                <h3>Griffin LeBeau</h3>
            </div>
            <div style={{ width: '80%' }}>
                <Nav currentPage={currentPage}
                    setCurrentPage={setCurrentPage}></Nav>
            </div>
        </div>
    )
};

export default Header;