import React, { createContext } from 'react';
import './App.css';
import Nav from './components/Nav';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';


type Context = {
  isLoggedIn : boolean; 
  username: string;
};

export const IsLoggedInContext = createContext<Context |null>(null)


function App() {

  const isLoggedIn = true;
  const username = 'sam96'
  return (
    <div className="App">
      <IsLoggedInContext.Provider
          value={{
            isLoggedIn,
            username
          }}
        >
          <Nav />

          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>

        </IsLoggedInContext.Provider>

    </div>
  );
}

export default App;
