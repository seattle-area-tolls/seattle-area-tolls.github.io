import React, {useEffect, useState} from 'react';
import {getText} from './costText';
import './App.css';

function Road520() {
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchData() {
      setText(await getText("520"))
    }
    fetchData();
  }, []);

  return <>{text}</>
}

function Road99() {
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchData() {
      setText(await getText("99"))
    }
    fetchData();
  }, []);

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
      {/* <Road520/> */}
      {(() => {
        switch(hash) {
          case "#520":
            return <Road520/>;
          case "#99":
            return <Road99/>;
          default: 
            return <Pick/>;
        }
        })()
      }
      {hash === "520" && <Road520/>}
      {hash === "99" && <Road99/>}
      </div>
    </div>
  );
}

export default App;
