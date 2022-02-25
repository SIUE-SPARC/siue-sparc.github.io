import './App.css';
import React from 'react';
import Main from './components/mainComponent';
import { BrowserRouter, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
      
  );
}

export default App;
