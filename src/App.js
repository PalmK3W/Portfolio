import React from 'react';
import Navbarr from './Navbar';
import Content from './Content';

//import './App.css';

function App() {
  return (
    <div className="App">
    <Navbarr/>
        <div className="container">
        <Content/>
        </div>
    
    </div>
  );
}

export default App;
