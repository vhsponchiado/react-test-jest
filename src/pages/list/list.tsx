import React, { useState } from "react";

export default function ListPage() {
  const [newItem, setNewItem] = useState("");

  const [list, setList] = useState<string[]>([
    "item1",
    "item2",
    "item3",
    "item4",
  ]);

  function addToList() {
    setTimeout(() => {
        setList((state) => [...state, newItem]);
    }, 500);
  }

  function removeItemFromList(itemToRemove: string) {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== itemToRemove));
    }, 500);
  }

  return (
    <div className="w-full flex flex-col gap-5 p-4">
      <h1 className="text-gray-800 text-xl">Title Page</h1>
      <input
        placeholder="New item"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        className="px-4 py-2 rounded-lg bg-purple-500 text-white w-[10rem]"
        onClick={addToList}
      >
        Add to list
      </button>

      {list.map((item, index) => (
        <div
          key={index}
          className="text-gray-800 px-1 py-1 border border-gray-200 w-[20rem] flex justify-between items-center"
        >
          <span>{item}</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => removeItemFromList(item)}
          >
            Remove Item
          </button>
        </div>
      ))}
    </div>
  );
}
