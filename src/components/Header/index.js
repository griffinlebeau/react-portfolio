import React from "react";
import Nav from './../Nav';
import { motion } from 'framer-motion';

function Header({currentPage, setCurrentPage}){
    return (
        <motion.div 
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EDDFEF' }}>
            <div style={{ width: '20%' }}>
                <h3>Griffin LeBeau</h3>
            </div>
            <div style={{ width: '80%' }}>
                <Nav currentPage={currentPage}
                    setCurrentPage={setCurrentPage}></Nav>
            </div>
        </motion.div>
    )
};

export default Header;