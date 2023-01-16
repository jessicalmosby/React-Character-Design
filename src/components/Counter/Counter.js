import React from 'react';
import './Counter';

export default function Counter({ headCount, middleCount, bottomCount }) {
  return (
    <div className="counter">
      <p>You have changed your head x {headCount}</p>
      <p>You have changed your top x {middleCount}</p>
      <p>You have changed you bottom x {bottomCount}</p>
    </div>
  );
}
