"use client";
import React, { useState } from "react";
import { Upload, Button, Image } from "antd";

function MyComponent() {
  const [imageUrl, setImageUrl] = useState("");

  const handleUploadChange = (info: any) => {
    if (info.file.status === "done") {
      // Get the image URL from the response or use the blob URL directly
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      setImageUrl(imageUrl);
    }
  };

  const beforeUpload = (file: any) => {
    // Generate thumbnail preview for image files
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      setImageUrl(e.target.result);
    };
    return false; // Prevent default upload behavior
  };

  return (
    <div>
      <Upload
        name="image"
        action="/upload-url"
        onChange={handleUploadChange}
        beforeUpload={beforeUpload}
        listType="picture-card"
        showUploadList={false}
      >
        <Button>Upload Image</Button>
      </Upload>
      {imageUrl && <Image src={imageUrl} alt="Uploaded thumbnail" style={{ width: "100px", height: "100px" }} />}
    </div>
  );
}

export default MyComponent;
