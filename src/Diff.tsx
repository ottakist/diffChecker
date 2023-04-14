import React, { useState } from 'react';

interface DiffProps {
  leftText: string;
  rightText: string;
  numberRows(text: string): JSX.Element[];
}

const Diff: React.FC<DiffProps> = ({ leftText, rightText, numberRows }) => {
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
              <span className=' select-none'>{i + 1}. </span> {` ${line1}`}
            </span>
          );
          res2.push(
            <span key={i} className='bg-green-300'>
              <span className=' select-none'>{i + 1}. </span> {` ${line2}`}
            </span>
          );
        } else {
          res.push(
            <span key={i}>
              <span className=' select-none'>{i + 1}. </span> {` ${line1}`}
            </span>
          );
          res2.push(
            <span key={i}>
              <span className=' select-none'>{i + 1}. </span> {` ${line2}`}
            </span>
          );
        }
      } else if (lines1.length > i) {
        res.push(
          <span key={i} className=''>
            <span className=' select-none'>{i + 1}. </span> {` ${line1}`}
          </span>
        );
      } else {
        res2.push(
          <span key={i} className='bg-green-300'>
            <span className=' select-none'>{i + 1}. </span> {` ${line2}`}
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
    <div className='flex h-1/2 flex-col'>
      <div className='text-center'>
        <button
          className='bg-white border-solid border-[1.8px] border-gray-200 rounded-md px-5 py-1 hover:bg-gray-200'
          onClick={handleCompare}
        >
          Compare
        </button>
      </div>
      {(leftLines.length > 1 || rightLines.length > 1) && (
        <div className='flex h-[90%]  flex-row '>
          <div className='w-1/2  overflow-y-auto ml-5 my-5 border-solid border-2 bg-gray-300 border-gray-500 shadow-md rounded-lg  flex flex-col text-left'>
            {diff(leftLines, rightLines)[0]}
          </div>
          <div className='w-1/2 overflow-y-auto mr-5 my-5 border-solid border-2 bg-gray-300 border-gray-500 shadow-md rounded-lg flex flex-col text-left'>
            {diff(leftLines, rightLines)[1]}
          </div>
        </div>
      )}
    </div>
  );
};

export default Diff;
