import React from 'react';
import './Editor.css';

export default function Editor({ head, setHead }) {
  const handleHead = (event) => {
    setHead(event.target.value);
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
    </div>
  );
}
