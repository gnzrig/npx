"use client";
import React from "react";
import Uploader from "./Uploader";

const Test = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData();

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image uploaded successfully");
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Uploader />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Test;
