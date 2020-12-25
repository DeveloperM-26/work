import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import './App.css';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
        <Header />
        <Content />
        <Cards />
      <Footer />
    </div>
  );
}

export default App;
