import React, { useState } from 'react';
import Diff from './Diff';
import TextArea from './components/TextArea';

function App() {
  const [originalText, setOriginalText] = useState('');
  const [editedText, setEditedText] = useState('');

  function numberRows(text: string): JSX.Element[] {
    const res: JSX.Element[] = [];
    text.split('\n').map((text, index) => {
      if (text.length > 100) {
        <pre className=' text-base' key={index}>
          " "
        </pre>;
      }
      res.push(
        <pre className=' text-base' key={index}>
          {index + 1}.
        </pre>
      );
    });

    return res;
  }
  return (
    <main className='h-screen'>
      <section className='flex h-1/2 pb-8 px-5'>
        <TextArea
          name='original'
          inputText={originalText}
          setText={setOriginalText}
          numberRows={numberRows}
        />
        <TextArea
          name='edited'
          inputText={editedText}
          setText={setEditedText}
          numberRows={numberRows}
        />
      </section>
      <Diff
        leftText={originalText}
        rightText={editedText}
        numberRows={numberRows}
      />
    </main>
  );
}

export default App;
