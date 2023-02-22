import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/TodoProvider';
import deleteIcon from '../assets/delete.png';

function ItemList() {
  const [filteredItemList, setFilteredItemList] = useState([]);
  const { typeTodo, itemList } = useContext(TodoContext);

  useEffect(() => {
    setFilteredItemList(() => {
      if (typeTodo === 'all') return itemList;
      if (typeTodo === 'active')
        return itemList.filter((item) => !item.checked);
      if (typeTodo === 'completed')
        return itemList.filter((item) => item.checked);
    });
  }, [typeTodo, itemList]);

  return (
    <div className="flex flex-col w-full">
      {filteredItemList?.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            label={item.label}
            checked={item.checked}
          />
        );
      })}
    </div>
  );
}

export default ItemList;

function Item({ id, label, checked }) {
  const { handleChangeCheckBox, handleDelete } = useContext(TodoContext);
  return (
    <label className="flex items-center my-2">
      <input
        onChange={(e) => handleChangeCheckBox(id, e.target.checked)}
        type="checkbox"
        checked={checked}
        className="w-4 h-4 checkbox"
      />
      <div className="flex items-center justify-between w-full">
        <div className={`font-medium text-lg ml-2`}>{label}</div>
        <img
          onClick={() => handleDelete(id)}
          className="w-6 h-6 cursor-pointer object-cover"
          alt="delete_icon"
          src={deleteIcon}
        />
      </div>
    </label>
  );
}
