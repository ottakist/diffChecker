import React, { useState } from 'react';

interface DiffProps {
  leftText: string;
  rightText: string;
  numberRows(text:string): string
}

const Diff: React.FC<DiffProps> = ({ leftText, rightText,numberRows }) => {
  const [leftLines, setLeftLines] = useState<string[]>([]);
  const [rightLines, setRightLines] = useState<string[]>([]);

  const diff = (
    lines1: string[],
    lines2: string[]
  ): [JSX.Element[], JSX.Element[]] => {
    let i = 0;
    const res: JSX.Element[] = [];
    const res2: JSX.Element[] = [];
    while (i < lines1.length || i < lines2.length) {
      const line1 = lines1[i] || '';
      const line2 = lines2[i] || '';
      if (lines1.length > i && lines2.length > i) {
        if (line1 !== line2) {
          res.push(
            <span key={i} className='bg-red-300'>
              <span className=' select-none'>{i}.</span> {`${line1}\n`}
            </span>
          );
          res2.push(
            <span key={i} className='bg-green-300'>
              <span className=' select-none'>{i}.</span> {`${line2}\n`}
            </span>
          );
        } else {
          res.push(
            <span key={i}>
              <span className=' select-none'>{i}.</span> {`${line1}\n`}
            </span>
          );
          res2.push(
            <span key={i}>
              <span className=' select-none'>{i}.</span> {`${line2}\n`}
            </span>
          );
        }
      } else if (lines1.length > i) {
        res.push(
          <span key={i} className=' bg-green-300'>
            <span className=' select-none'>{i}.</span> {`${line1}\n`}
          </span>
        );
      } else {
        res2.push(
          <span key={i} className='bg-green-300'>
            <span className=' select-none'>{i}.</span> {`${line2}\n`}
          </span>
        );
      }
      i++;
    }
    return [res, res2];
  };

  const handleCompare = () => {
    const leftArray = leftText.split('\n');
    const rightArray = rightText.split('\n');
    setLeftLines(leftArray);
    setRightLines(rightArray);
  };

  return (
    <div className='flex flex-col mx-5'>
      <div className='text-center'>
        <button
          className='bg-white border-solid border-[1.8px] border-gray-200 rounded-md px-5 py-1 hover:bg-gray-200'
          onClick={handleCompare}
        >
          Compare
        </button>
      </div>
      <div className='flex flex-row '>
        <div className='w-1/2 h-full mx-5 my-5 border-solid border-2 bg-gray-300 border-gray-500 shadow-md rounded-lg overflow-hidden flex flex-col text-left'>
          {diff(leftLines, rightLines)[0]}
        </div>
        <div className='w-1/2 h-1/4 mx-5 my-5 border-solid border-2 bg-gray-300 border-gray-500 shadow-md rounded-lg overflow-hidden flex flex-col text-left'>
          {diff(leftLines, rightLines)[1]}
        </div>
      </div>
    </div>
  );
};

export default Diff;
