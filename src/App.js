import React, {useState, useEffect} from "react";
import {v4} from 'uuid';
import {randomColor} from 'randomcolor';
import Draggable from "react-draggable";

import './App.css';
const App = () =>{
  const [item, setItem] = useState('')
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const newItem = () =>{
    if(item.trim() !== ''){
      const newItem = {
        id: v4(),
        item: item,
        color: randomColor({
          luminosity: 'light'
        }),
        defaultPos: {
          x: -100,
          y: -100
        }
      }
    }
  }
  return (
    <div className="App">
      <div className="wrapper">
          <input
              type="text"
              placeholder="Typing..."
              onChange={(e) => setItem(e.target.value)}
          />
          <button className="enter" onClick={newItem}>ENTER</button>
      </div>
    </div>
  );
}

export default App;
