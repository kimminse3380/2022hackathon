import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import { useLocalContext } from './hooks/useLocalContext';
import { LocalContext } from './context/localContext';

function App() {
  const localContext = useLocalContext();

  return (
    <LocalContext.Provider value={{ ...localContext }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LocalContext.Provider>
  );
}

export default App;
