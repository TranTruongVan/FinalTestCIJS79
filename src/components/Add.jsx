import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoProvider';

function Add() {
  const [input, setInput] = useState('');
  const { handleAdd } = useContext(TodoContext);
  return (
    <div className="flex items-center w-full mt-4">
      <input
        type="text"
        placeholder="add details"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="flex-1 w-0 outline-none border border-black py-3 px-4 rounded-lg h-full"
      />
      <button
        onClick={() => {
          setInput('');
          handleAdd(input);
        }}
        className="py-3 px-5 rounded-lg bg-blue-500 text-white ml-3"
      >
        Add
      </button>
    </div>
  );
}

export default Add;
