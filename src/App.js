import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
const pages = useState(['about', 'portfolio', 'resume', 'contact']) ;
const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div className='App'>
      <>
      <Header
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}></Header>
      <Main
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Main>
      <Footer></Footer>
      </>
    </div>
  );
}

export default App;
