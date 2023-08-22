// Example of using the named exports in a component
"use client";
import React from "react";
import { getHandler, postHandler } from "@/app/pages/api/test"; // Adjust the path as needed

async function handleGetRequest() {
  getHandler(req, res);
}

async function handlePostRequest() {
  postHandler(req, res);
}

function MyComponent() {
  return (
    <div>
      <button onClick={handleGetRequest} className="m-2 p-3 border rounded-md bg-orange-300">
        Make GET Request
      </button>
      <button onClick={handlePostRequest} className="m-2 p-3 border rounded-md bg-orange-300">
        Make POST Request
      </button>
    </div>
  );
}

export default MyComponent;
