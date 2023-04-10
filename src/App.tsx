import React, { useState, useRef, FC } from 'react';
import Diff from './Diff';

function App() {
  const [originalText, setOriginalText] = useState('');
  const [editedText, setEditedText] = useState('');

  function numberRows(text: string) {
    return text
      .split('\n')
      .map((text, index) => {
        if (text.split('').length > 100) {
          return `${index + 1}.\n `;
        }
        return `${index + 1}.`;
      })
      .join('\n');
  }
  return (
    <main className='h-screen'>
      <div className='flex h-1/2 mb-8'>
        .{' '}
        <div className='w-1/2 h-full mx-5 my-5 border-solid border-2 bg-gray-300 border-gray-500 shadow-md rounded-lg overflow-hidden flex flex-col'>
          <label htmlFor='original' className='ml-6'>
            Enter original text
          </label>
          <div className='relative top-0 '>
            <pre className='absolute'>{numberRows(originalText)}</pre>
          </div>
          <textarea
            className='flex-grow mx-6 resize-none  text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400'
            placeholder=' '
            rows={100}
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
          />
        </div>
        <div className='w-1/2 h-full mx-5 my-5 border-solid border-2 bg-gray-300 border-gray-500 shadow-md rounded-lg overflow-hidden flex flex-col'>
          <label htmlFor='edited' className=' ml-6'>
            Enter edited text
          </label>
          <div className='relative top-0 '>
            <pre className='absolute'>{numberRows(editedText)}</pre>
          </div>
          <textarea
            className='flex-grow mx-6 resize-none  text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400'
            placeholder=' '
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </div>
      </div>
      <Diff
        leftText={originalText}
        rightText={editedText}
        numberRows={numberRows}
      />
    </main>
  );
}

export default App;
