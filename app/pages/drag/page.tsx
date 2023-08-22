"use client";
import React, { useState } from "react";

const DraggableList = () => {
  const [items, setItems] = useState<{ name: string; value: string }[]>([
    { name: "Item 1", value: "1" },
    { name: "Item 2", value: "2" },
    { name: "Item 3", value: "3" },
    { name: "Item 4", value: "4" },
  ]);

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, targetIndex: number) => {
    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"));
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(sourceIndex, 1);
    updatedItems.splice(targetIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item.name} - {item.value}
        </li>
      ))}
    </ul>
  );
};

export default DraggableList;
