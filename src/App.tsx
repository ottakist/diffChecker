import React, { useState, useRef, FC } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Field from './components/Field';

function App() {
  const [originalText, setOriginalText] = useState('');
  const [editedText, setEditedText] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const tempOriginal = originalText.split(' ')
    const tempEdited = editedText.split(' ')
    let i = 0;
    let indexes = [];
    while (i< tempOriginal.length || i< tempEdited.length) {
      if (tempOriginal[i] !== tempEdited[i]) {
        indexes.push(i);
        console.log(i);
        console.log(tempEdited[i]);
        break;
      }
      i++;
    }
    console.log(indexes);
    console.log(tempOriginal);
    // console.log(tempEdited);
  };

  return (
    <form onSubmit={onSubmit} className='flex h-screen justify-around'>
      <div className='flex-col h-1/2 w-full  text-center px-5'>
        <label htmlFor='original' className='py-15'>
          Enter original text
        </label>
        <textarea
          name={'original'}
          className='w-full h-full  resize-none'
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
        ></textarea>
      </div>
      <div className='flex-col h-1/2 w-full  text-center  px-5'>
        <label htmlFor='original' className=''>
          Enter changed text
        </label>
        <textarea
          name={'edited'}
          className='w-full h-full  resize-none'
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        ></textarea>
      </div>
      <button type='submit'>submit</button>
    </form>
  );
}

export default App;
