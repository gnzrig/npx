"use client";
import React, { useState } from "react";
import { useFormik } from "formik";

const RadioButtonGroup: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      gender: "",
      avatar: null as File | null,
    },
    onSubmit: async (values) => {
      console.log(values);
      //   const formData = new FormData();
      //   formData.append("gender", values.gender);
      //   if (values.avatar) {
      //     formData.append("avatar", values.avatar);
      //   }
      //   try {
      //     const response = await fetch("/upload", {
      //       method: "POST",
      //       body: formData,
      //     });
      //     const data = await response.json();
      //     console.log("Response from server:", data);
      //   } catch (error) {
      //     console.error("Error uploading file:", error);
      //   }
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    if (file) {
      formik.setFieldValue("avatar", file);

      // Display image preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
        console.log(reader);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeItem = () => {
    setImagePreview(null);
    formik.setFieldValue("avatar", null);
  };

  return (
    <div>
      <h1>Radio Button Group Example</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input type="file" name="avatar" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          {imagePreview && (
            <div className="relative inline-block">
              <span
                className="absolute top-0 right-0 border bg-orange-500 p-4 hover:cursor-pointer"
                onClick={removeItem}
              >
                X
              </span>
              <img src={imagePreview} alt="Avatar Preview" style={{ height: "200px", width: "200px" }} />
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RadioButtonGroup;
