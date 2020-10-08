import React, {useEffect, useState} from 'react';
import {getText} from './costText';
import './App.css';

function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchData() {
      setText(await getText("520"))
    }
    fetchData();
  });

  return (
    <div className="App">
      <div className="text">
      {text}
      </div>
    </div>
  );
}

export default App;
