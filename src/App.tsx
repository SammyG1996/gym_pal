import React, { createContext, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ContextType } from './config/ContextType';
import Alert from './components/helper_components/Alerts/Alert';


export const IsLoggedInContext = createContext<ContextType |null>(null)


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);
  const [alert, setAlert] = useState<null | string>(null);
  const [user, setUser] = useState<null | object>(null);
  
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month}-${day}`;

  const updatedIsLoggedIn = () => {
    setIsLoggedIn(bool => !bool);
  }
  const updateToken = (val:string | null) => {
    setToken(val);
  }
  const updateAlert = (val:string | null) => {
    setAlert(val)
  }
  const updateUsername = (val:string | null) => {
    setUsername(val)
  }
  const updateUser = (val:object | null) => {
    setUser(val)
  }

  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_KEY || ""}>
      <IsLoggedInContext.Provider value={{isLoggedIn, updatedIsLoggedIn, token, updateToken, username, updateUsername, alert, updateAlert, formattedDate, user, updateUser}}>
          
          <Nav />
          <Alert />
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/signin'} element={<SignIn />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>

        </IsLoggedInContext.Provider>
        </GoogleOAuthProvider>
    </div>
  );
}

export default App;
