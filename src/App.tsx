import React, { useState, useRef, FC } from 'react';
import Diff from './Diff';


function App() {
  const [originalText, setOriginalText] = useState('');
  const [editedText, setEditedText] = useState('');
  return (
    <div className='h-screen'>
      <div className='flex h-1/2 justify-around mb-5'>
        <div className='flex-col  h-full w-full  text-center px-5'>
          <label htmlFor='original' className=' '>
            Enter original text
          </label>
          <textarea
            className='w-full h-full  resize-none'
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
          ></textarea>
        </div>
        <div className='flex-col  h-full w-full  text-center px-5'>
          <label htmlFor='original' className=''>
            Enter changed text
          </label>
          <textarea
            className='w-full h-full  resize-none'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          ></textarea>
        </div>
      </div>
      <Diff leftText={originalText} rightText={editedText} />
    </div>
  );
}

export default App;
