import React, { useState } from "react";

const List = ({ data, setList, myList }: any) => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState<string[]>([]);
  const checkedList = (e: any) => {
    const copyIdx = idx;
    if (e.target.checked && copyIdx?.indexOf(e.target.value) === -1) {
      setIdx([...copyIdx, e.target.value]);
    } else {
      setIdx(
        copyIdx?.filter((element) => {
          return element !== e.target.value;
        })
      );
    }
  };

  const addList = () => {
    setIdx(setList(idx));
    setOpen(!open);
  };

  console.log(idx);

  return (
    <div className="">
      <div>
        <button onClick={() => setOpen(!open)} className="rounded-md border-slate-600 border p-3 m-3">
          Show List
        </button>
      </div>
      <div
        className={`${
          !open && "hidden"
        } absolute top-0 z-50 bg-gradient-to-r from-gray-50 h-screen w-screen flex justify-center items-center`}
      >
        <div
          className="text-xl absolute top-10 right-[450px] bg-gray-400 p-5 hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          X
        </div>
        <div className="p-10 bg-red-200 rounded-lg relative">
          <div className={`h-[600px] overflow-y-scroll w-[800px] bg-gray-400 z-100`}>
            <table>
              <thead>
                <tr>
                  <td>Checked</td>
                  <td>USERID</td>
                  <td>ID</td>
                  <td>TITLE</td>
                  <td>COMPLETED</td>
                </tr>
              </thead>
              <tbody>
                {data?.map((element: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          value={element.id}
                          onChange={checkedList}
                          checked={myList.includes(element.id.toString())}
                        />
                      </td>
                      <td>{element.userId}</td>
                      <td>{element.id}</td>
                      <td>{element.title}</td>
                      <td>{element.completed ? "true" : "false"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <button className="p-3 border border-slate-600 rounded-md m-2" onClick={addList}>
              Add list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
