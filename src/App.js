import React, { useContext } from 'react';
import deleteIcon from './assets/delete.png';
import Add from './components/Add';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import { TodoContext } from './contexts/TodoProvider';

const App = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center max-w-[600px] px-4">
      <h2 className="text-3xl font-bold mt-4">#todo</h2>
      <Navbar />
      <Add />
      <ItemList />
      <DeleteAllButton />
    </div>
  );
};

function DeleteAllButton() {
  const { itemList, handleDeleteAll } = useContext(TodoContext);
  return (
    <>
      {itemList.length !== 0 && (
        <button
          onClick={handleDeleteAll}
          className="py-3 px-5 bg-red-500 text-white self-end rounded-lg mt-4 flex items-center"
        >
          <img
            alt="delete_icon"
            src={deleteIcon}
            className="w-6 h-6 invert filter mr-2"
          />
          Delete all
        </button>
      )}
    </>
  );
}

export default App;
