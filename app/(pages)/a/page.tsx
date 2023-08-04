"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const page = () => {
  const [newList, setNewList] = useState([]);

  let passList = (element: any, setElement: any) => {
    setNewList(element);
    setElement([...newList]);
  };

  useEffect(() => {
    passList = (element: any, setElement: any) => {
      setNewList(element);
      setElement([...newList]);
    };
  }, [newList]);

  const updateList = (e: any) => {
    const list = newList;
    setNewList(list.filter((element) => element !== e));
  };
  return (
    <div>
      <div className="border bg-slate-200 w-[300px] h-[300px]">
        <ul>
          {newList.map((e, index) => {
            return (
              <li key={index} className="m-2">
                {e}{" "}
                <span className="bg-slate-500 p-1 rounded-md hover:cursor-pointer" onClick={() => updateList(e)}>
                  X
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Modal passList={passList} />
      </div>
    </div>
  );
};

export default page;
