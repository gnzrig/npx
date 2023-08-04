"use client";
import React, { useState } from "react";
import { jsonTableData } from "@/datas";
import axios from "axios";

const Modal = ({ passList }: any) => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState<string[]>([]);
  const showModal = () => {
    setOpen(!open);
  };

  const updateList = () => {
    setOpen(!open);
    passList(idx, setIdx);
  };

  const checkBoxList = (e: any) => {
    const arr = idx;
    if (e.target.checked) {
      setIdx([...arr, e.target.value]);
    } else {
      setIdx(arr.filter((el) => el !== e.target.value));
    }
  };

  console.log(idx);

  return (
    <div>
      <div>
        <button className="p-3 border rounded-md m-3" type="button" onClick={showModal}>
          Show table
        </button>
      </div>
      <div className={`${!open && "hidden"}`}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {jsonTableData.map((e, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" value={e.id} onChange={checkBoxList} />
                  </td>
                  <td>{e.email}</td>
                  <td>{e.contact}</td>
                  <td>{e.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button onClick={updateList} className="border p-3 rounded-md m-2">
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
