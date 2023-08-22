import React, { useState } from "react";

const SearchField = ({ searching }: any) => {
  const [searchFieldData, setSearchFieldData] = useState({
    id: "",
    title: "",
    completed: "",
  });

  const setFieldData = (e: any) => {
    const { name, value } = e.target;
    setSearchFieldData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const searchData = () => {
    searching(searchFieldData);
  };

  const clearData = () => {
    setSearchFieldData({
      id: "",
      title: "",
      completed: "",
    });
  };

  return (
    <div className="m-3">
      <div className="flex gap-x-2">
        <input type="text" name="id" value={searchFieldData.id} onChange={setFieldData} />
        <input type="text" name="title" value={searchFieldData.title} onChange={setFieldData} />
        <select name="completed" id="completed" value={searchFieldData.completed} onChange={setFieldData}>
          <option value="">ALL</option>
          <option value="true">TRUE</option>
          <option value="false">FALSE</option>
        </select>
        <button className="border border-slate-400 rounded-md p-3" type="button" onClick={clearData}>
          Clear
        </button>
        <button className="border border-slate-400 rounded-md p-3" type="button" onClick={searchData}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchField;
