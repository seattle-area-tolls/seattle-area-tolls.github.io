import React, {useEffect, useState} from 'react';
import {getText} from './costText';
import Div100vh from 'react-div-100vh'

import './App.css';

function Road({name}) {
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchData() {
      setText(await getText(name))
    }
    let interval = setInterval(() => {
      fetchData();
    }, 60 * 1000);

    fetchData();
    return () => clearInterval(interval);
  }, [name]);

  return <>{text}</>
}

function Pick() {
  return <ul>
    <li>
      <a href="?99">99</a>
    </li>
    <li>
      <a href="?520">520</a>
    </li>
  </ul>;
}

function App() {
  return (
    <Div100vh className="App">
      <div className="text">
      {(() => {
        switch(window.location.search) {
          case "?520":
            return <Road name="520"/>;
          case "?99":
            return <Road name="99"/>;
          default: 
            return <Pick/>;
        }
        })()
      }
      </div>
    </Div100vh>
  );
}

export default App;
