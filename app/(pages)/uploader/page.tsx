"use client";
import React from "react";
import ImageUploader from "./ImageUploader";

const UploadImagePage: React.FC = () => {
  const handleUpload = (file: File) => {
    // Here you can handle the file upload, for example, you can send it to your server or process it in any way you want.
    console.log("File uploaded:", file);
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <ImageUploader onUpload={handleUpload} />
    </div>
  );
};

export default UploadImagePage;
