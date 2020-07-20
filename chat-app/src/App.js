import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Core/Routes';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes />
    </div>
  );
}

export default App;
