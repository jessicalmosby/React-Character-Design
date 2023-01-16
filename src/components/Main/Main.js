import React, { useState } from 'react';
import './Main.css';
import Preview from '../Preview/Preview.js';
import Editor from '../Editor/Editor.js';
import background from '../../assets/background.png';

export default function Main() {
  const [head, setHead] = useState('predator');
  const [middle, setMiddle] = useState('pinkshirt');
  const [bottom, setBottom] = useState('green');

  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      <div>
        <Preview head={head} middle={middle} bottom={bottom} />
      </div>
      <div className="editor">
        <Editor
          setHead={setHead}
          head={head}
          setMiddle={setMiddle}
          middle={middle}
          setBottom={setBottom}
          bottom={bottom}
        />
      </div>
    </main>
  );
}
