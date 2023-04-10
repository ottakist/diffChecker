import React, { useState } from 'react';

interface DiffProps {
  leftText: string;
  rightText: string;
  numberRows(text:string): string
}

const Diff: React.FC<DiffProps> = ({ leftText, rightText,numberRows }) => {
  const [leftLines, setLeftLines] = useState<string[]>([]);
  const [rightLines, setRightLines] = useState<string[]>([]);

  const diff = (lines1: string[], lines2: string[]): JSX.Element[] => {
    let i = 0;
    const res: JSX.Element[] = [];
    while (i < lines1.length || i < lines2.length) {
      const line1 = lines1[i] || '';
      const line2 = lines2[i] || '';
      if (lines1.length > i && lines2.length > i) {
        if (line1 !== line2) {
          res.push(
            <span key={i} style={{ backgroundColor: 'red' }}>
             {i}. {`${line1}\n`}
            </span>
          );
        } else {
          res.push(
            <span key={i}>
              {i}. {`${line1}\n`}
            </span>
          );
        }
      } else if (lines1.length > i) {
        res.push(
          <span key={i} style={{ backgroundColor: 'red' }}>
            {i}. {`${line1}\n`}
          </span>
        );
      } else {
        res.push(
          <span key={i} style={{ backgroundColor: 'green' }}>
            {i}. {`${line2}\n`}
          </span>
        );
      }
      i++;
    }
    return res;
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
        <button className='bg-white border-solid border-[1.8px] border-gray-200 rounded-md px-5 py-1 hover:bg-gray-200' onClick={handleCompare}>Compare</button>
      </div>
      <div className='flex flex-col text-left'>{(diff(leftLines, rightLines))}</div>
    </div>
  );
};

export default Diff;
