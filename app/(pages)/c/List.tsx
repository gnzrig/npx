"use client"
import React, { useState, useEffect } from "react";

const List = ({ data, parentDatas, parentToChild }: any) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [idx, setIdx] = useState<any>([]);
  const checkedList = (e: any) => {
    const copyIdx = [...idx];
    if (e.target.checked && copyIdx?.indexOf(e.target.value) === -1) {
      setIdx([...copyIdx, {value: e.target.value, title: e.target.name, checked: e.target.checked}]);
    } else {
      setIdx(
        copyIdx?.filter((element : any) => {
          return element.value !== e.target.value;
        })
      );
    }
  };

  const search = () => {
    const a = data?.filter((el: any) => {
      return el.id.toString() === searchValue
    })
    console.log(a);

  }

  const addList = () => {
    parentDatas(idx);
    setOpen(!open);
  };

  const showList = () => {
    setIdx(parentToChild);
    setOpen(!open);
  }

  useEffect(() => {
    const searchInput : any = document.getElementById('searchInput');
    const table : any = document.getElementById('dataTable');

    const handleSearch = () => {
      const query = searchInput.value.toLowerCase();
      const rows = table.querySelectorAll('tbody tr');

      rows.forEach((row : any) => {
        const text = row.textContent.toLowerCase();
        if (text.includes(query)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    };

    searchInput.addEventListener('input', handleSearch);

    return () => {
      searchInput.removeEventListener('input', handleSearch);
    };
  }, []);

  return (
    <div className="">
      <div>
        <button onClick={showList} className="rounded-md border-slate-600 border p-3 m-3">
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
          <div className="flex">
          <input id="searchInput" type="text" value={searchValue} onChange={(e : any) => setSearchValue(e.target.value)} />
          <button type="button" onClick={search}>Search</button>
          </div>
          <div className={`h-[600px] overflow-y-scroll w-[800px] bg-gray-400 z-100`}>
            <table id="dataTable">
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
                          name={element.title}
                          checked={idx.some((el : any) => element.title === el.title)}
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
