import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoProvider';

function Navbar() {
  const { typeTodo, setTypeTodo } = useContext(TodoContext);
  return (
    <div className="flex justify-between items-center w-full border-b-2 border-gray-500">
      {['all', 'active', 'completed'].map((tab) => {
        return (
          <div
            key={tab}
            onClick={() => {
              setTypeTodo(tab);
            }}
            style={{
              borderBottom: typeTodo === tab && '4px blue solid',
            }}
            className="tab"
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
