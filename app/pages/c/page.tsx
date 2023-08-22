"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import SearchField from "./SearchField";

const TestJsonData = () => {
  const [data, setData] = useState([]);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const parentDatas = (datas : any) =>{
    setListData(datas);
  }

  const getFilteredData = (fieldObj: any) => {
    async function fetchData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        const filteredData = response.data.filter((element: any) => {
          return (
            element.id.toString() === fieldObj.id.toString() ||
            element.title.includes(fieldObj.title.trim()) ||
            element.completed.toString() === fieldObj.completed.toString()
          );
        });
        setData(filteredData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  };

  const removeFromList = (e: any) => {
    const copyListData = listData;
    const filtered = copyListData.filter((el : any) => {
      return el.title !== e.target.innerText;
    });
    setListData(filtered);
  };

  const parentToChild = () => {
    return listData
  }

  return (
    <div className="flex flex-col">
      <SearchField searching={getFilteredData} />
      <List data={data} parentDatas={parentDatas} parentToChild={parentToChild}/>
      <div>
        <ul>
          {listData?.map((el : any, index) => {
            return (
              <li className="bg-blue-200 p-3 m-1 hover:cursor-pointer" onClick={removeFromList} key={index}>
                {el.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TestJsonData;
