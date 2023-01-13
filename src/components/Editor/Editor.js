import React from 'react';
import './Editor.css';

export default function Editor({ head, setHead, middle, setMiddle }) {
  const handleHead = (event) => {
    setHead(event.target.value);
  };
  const handleMiddle = (event) => {
    setMiddle(event.target.value);
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
    </div>
  );
}
