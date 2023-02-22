import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = React.createContext();

export default function TodoProvider({ children }) {
  const [itemList, setItemList] = useState([]);
  const [typeTodo, setTypeTodo] = useState('all');

  useEffect(() => {
    const itemListObjectString = localStorage.getItem('itemList');
    setItemList(JSON.parse(itemListObjectString) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);

  function handleAdd(input) {
    if (input === '') return;
    setItemList((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          label: input,
          checked: false,
        },
      ];
    });
  }

  function handleChangeCheckBox(id, checked) {
    setItemList((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        else {
          return {
            ...item,
            checked,
          };
        }
      })
    );
  }

  function handleDeleteAll() {
    setItemList([]);
  }

  function handleDelete(id) {
    setItemList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  const value = useMemo(() => {
    return {
      itemList,
      typeTodo,
      setTypeTodo,
      handleAdd,
      handleDelete,
      handleDeleteAll,
      handleChangeCheckBox,
    };
  }, [itemList, typeTodo]);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
