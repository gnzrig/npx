"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import SearchField from "./SearchField";

const TestJsonData = () => {
  const [data, setData] = useState([]);
  const [listData, setDataList] = useState([]);
  const [myList, setMyList] = useState([]);
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

  const setList = (arr: any) => {
    setDataList(arr);
  };

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

  const setMylists = (list: any) => {
    setMyList(list);
  };

  const removeFromList = (e: any) => {
    const copyListData = listData;
    const filtered = copyListData.filter((el) => {
      return el !== e.target.innerText;
    });
    setDataList(filtered);
    setMylists(filtered);
  };

  return (
    <div className="flex flex-col">
      <SearchField searching={getFilteredData} />
      <List data={data} setList={setList} myList={myList} />
      <div>
        <ul>
          {listData?.map((el, index) => {
            return (
              <li className="bg-blue-200 p-3 m-1 hover:cursor-pointer" onClick={removeFromList} key={index}>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TestJsonData;
