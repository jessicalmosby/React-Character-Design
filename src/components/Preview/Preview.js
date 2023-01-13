import React from 'react';
import './Preview.css';

export default function Preview({ head, middle }) {
  return (
    <div className="preview">
      <img className="img-head" src={`./${head}-head.png`} />
      <img className="img-middle" src={`./${middle}-middle.png`} />
    </div>
  );
}
