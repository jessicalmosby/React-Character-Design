import React from 'react';
import './Preview.css';

export default function Preview({ head }) {
  return (
    <div className="preview">
      <img className="img-head" src={`./${head}-head.png`}></img>
    </div>
  );
}
