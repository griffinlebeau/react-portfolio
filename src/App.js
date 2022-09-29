import './App.css';
import React, { useState } from 'react';
import Header from '/components/Header';
import Footer from '/components/Footer';
import Nav from '/components/Nav';
import Main from '/components/Main';


function App() {
const pages = useState(["about", "portfolio", "resume", "contact"]) ;
const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div className="App">
      <Header>
        <Nav 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        ></Nav>
      </Header>
      <Main
        currentPage={currentPage}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
