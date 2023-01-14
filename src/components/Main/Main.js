import React, { useState } from 'react';
import './Main.css';
import Preview from '../Preview/Preview.js';
import Editor from '../Editor/Editor.js';
import background from '../../assets/background.png';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');

  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      <Preview head={head} middle={middle} bottom={bottom} />
      <Editor
        setHead={setHead}
        head={head}
        setMiddle={setMiddle}
        middle={middle}
        setBottom={setBottom}
        bottom={bottom}
      />
    </main>
  );
}
