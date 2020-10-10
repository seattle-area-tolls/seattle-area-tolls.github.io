import React, {useEffect, useState} from 'react';
import {getText} from './costText';
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
      <a href="#99">99</a>
    </li>
    <li>
      <a href="#520">520</a>
    </li>
  </ul>;
}

function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash)
    }, false)
  }, []);

  return (
    <div className="App">
      <div className="text">
      {(() => {
        switch(hash) {
          case "#520":
            return <Road name="520"/>;
          case "#99":
            return <Road name="99"/>;
          default: 
            return <Pick/>;
        }
        })()
      }
      </div>
    </div>
  );
}

export default App;
