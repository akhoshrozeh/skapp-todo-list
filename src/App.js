import React, { useState, useEffect } from 'react';
import './App.css';
import MySkyButton from './components/MySkyButton';
import { SkynetClient } from "skynet-js";

const portal =
  window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;

// Initiate the SkynetClient
const client = new SkynetClient(portal);

function App() {
  const [userID, setUserID] = useState();
  const [mySky, setMySky] = useState();
  const [loggedIn, setLoggedIn] = useState(null);

  const dataDomain = 'localhost';
  
  useEffect(() => {
    async function initMySky() {
      try {
        const mySky = await client.loadMySky(dataDomain);
        const loggedIn = await mySky.checkLogin();
        setMySky(mySky);
        setLoggedIn(loggedIn);

        if (loggedIn) {
          setUserID(await mySky.userID());
        }

      } catch (e) {
        console.log("exception caught under initMySky(): ");
        console.error(e);
      }
  
    }
  
    initMySky();
  }, []);

  
  const handleMySkyLogin = async () => {
    try {

      const status = await mySky.requestLoginAccess();
      setLoggedIn(status);
      if (status) {
        setUserID(await mySky.userID());
      }
      console.log("MySky login success!");

    } catch (e) {
      console.log("MySky login failure: ");
      console.error(e);
    }
    
  };

  const handleMySkyLogout = async () => {
    try {

      await mySky.logout();
      setLoggedIn(false);
      setUserID('');
      console.log("MySky logout success!");
    } catch (e) {
      console.log("MySky logout failure: ");
      console.error(e);
    }
   
  };

  const MySkyButtonProps = {
    mySky,
    loggedIn,
    userID, 
    dataDomain,
    handleMySkyLogin,
    handleMySkyLogout
    
  };

  return (
    <div className="App">
      <h1>Todo Skapp!</h1>
      <MySkyButton {...MySkyButtonProps}/>
    </div>
  );
}

export default App;
