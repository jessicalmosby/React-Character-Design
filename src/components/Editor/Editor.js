import React, { useState } from 'react';
import './Editor.css';
import Counter from '../Counter/Counter.js';

export default function Editor({ head, setHead, middle, setMiddle, bottom, setBottom }) {
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  const handleHead = (event) => {
    setHead(event.target.value);
    setHeadCount((currentState) => {
      return currentState + 1;
    });
  };
  const handleMiddle = (event) => {
    setMiddle(event.target.value);
    setMiddleCount((currentState) => {
      return currentState + 1;
    });
  };
  const handleBottom = (event) => {
    setBottom(event.target.value);
    setBottomCount((currentState) => {
      return currentState + 1;
    });
  };
  const handleInput = () => {
    setCatchphrases((currentState) => [...currentState, inputValue]);
    setInputValue('');
  };

  return (
    <div className="editor">
      <div className="form-control">
        <label htmlFor="head">Head</label>
        <select value={head} onChange={handleHead}>
          <option value="angel">Angel</option>
          <option value="kiss">Kiss</option>
          <option value="sleep">Sleepy</option>
          <option value="thumbsup">You got it, Dude!</option>
          <option value="hearteyes">Love</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="middle">Top</label>
        <select value={middle} onChange={handleMiddle}>
          <option value="blueshirt">Blue</option>
          <option value="pinkdress">Fancy</option>
          <option value="pinkshirt">Pink</option>
          <option value="redshirt">Red</option>
        </select>
      </div>
      <div className="bottom">
        <label htmlFor="bottom">Bottom</label>
        <select value={bottom} onChange={handleBottom}>
          <option value="bluepants">Blue</option>
          <option value="pinkpants">Pink</option>
          <option value="redpants">Red</option>
        </select>
      </div>
      <div className="catchphrases">
        <label htmlFor="catchphrases">Catchphrase</label>
        <input
          name="catchphrase"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleInput}>Submit</button>
        <ul>
          {catchphrases.map((event) => {
            return <li key={event}>{event}</li>;
          })}
        </ul>
      </div>
      <div className="counter">
        <Counter headCount={headCount} middleCount={middleCount} bottomCount={bottomCount} />
      </div>
    </div>
  );
}
