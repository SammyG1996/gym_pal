import React, { createContext } from 'react';
import './App.css';
import Nav from './components/Nav';

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
        </IsLoggedInContext.Provider>

    </div>
  );
}

export default App;
