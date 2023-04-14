import { useRef } from 'react';

interface Props {
  inputText: string;
  name: string;
  numberRows(text: string): JSX.Element[];
  setText: (value: string) => void;
}

const Textarea: React.FC<Props> = ({
  inputText,
  setText,
  numberRows,
  name,
}) => {
  const show = useRef<boolean>(true);
  return (
    <div className='w-1/2 h-full  my-5 pt-6 border-solid border-2 bg-gray-300 border-gray-500 shadow-md rounded-lg overflow-y-auto  inline-flex'>
      {show.current && (
        <label htmlFor='original' className=' absolute top-5 ml-6'>
          Enter {name} text
        </label>
      )}
      <div id='line-numbers' className=' min-w-[24px]   w-auto'>
        {numberRows(inputText)}
      </div>
      <textarea
        className='flex-grow h-full  overflow-y-auto  resize-none text-base text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400'
        value={inputText}
        onChange={(e) => {
          setText(e.target.value);
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
          
          if (e.target.scrollHeight > 416) {
            show.current = false;
          }
        }}
      />
    </div>
  );
};
export default Textarea;
