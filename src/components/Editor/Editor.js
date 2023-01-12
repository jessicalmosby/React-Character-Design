import React from 'react';
import './Editor.css';

export default function Editor({ setHead }) {
  const handleHead = (event) => {
    setHead(event.target.value);
  };

  return (
    <div className="editor">
      <div className="form-control">
        <label htmlFor="head">Head</label>
        <select onChange={handleHead}>
          <option value="head"></option>
        </select>
      </div>
    </div>
  );
}
