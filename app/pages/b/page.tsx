"use client";
import React, { useState } from "react";
import { jsonTableData } from "@/datas";

// ChildComponent.js
const ChildComponent = ({ updateData }: any) => {
  const handleUpdateClick = () => {
    // Call the callback function passed from the parent
    updateData([]);
  };

  return (
    <div>
      <button onClick={handleUpdateClick}>Update Parent Data</button>
    </div>
  );
};

// ParentComponent.js
const ParentComponent = () => {
  const [data, setData] = useState(jsonTableData);

  const handleUpdateData = (newData: any) => {
    // Update the parent's state with new data
    setData(newData);
  };

  return (
    <div>
      Data in Parent:{" "}
      <ul>
        {data.map((element, index) => {
          return (
            <>
              <li>{element.contact}</li>
              <li>{element.username}</li>
              <li>{element.email}</li>
              <li>{element.id}</li>
            </>
          );
        })}
      </ul>
      <ChildComponent updateData={handleUpdateData} />
    </div>
  );
};

export default ParentComponent;
