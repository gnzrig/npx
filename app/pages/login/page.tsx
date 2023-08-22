"use client";
import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "./loginSchema";
import axios from "axios";

const Login = () => {
  const onSubmit = async (values: any, actions: any) => {
    console.log(values);
    console.log(actions);
    const formData = new FormData();
    try {
      formData.append("file", values.image);
      const res = await axios.post("www.localhost:3001/api/images");
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      image: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <div className="h-screen w-screen">
      <form autoComplete="off" onSubmit={handleSubmit} className="flex flex-col w-[300px] justify-center items-center">
        <label htmlFor="name">User name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && <p className="text-[9px] text-red-500">{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <p className="text-[8px] text-red-500">{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <p className="text-[8px] text-red-500">{errors.password}</p>}

        <label htmlFor="confirmPassword">Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-[8px] text-red-500">{errors.confirmPassword}</p>
        )}
        <input type="file" name="image" value={values.image} onChange={handleChange} onBlur={handleBlur} />
        {errors.image && touched.image && <p className="text-[8px] text-red-500">{errors.image}</p>}
        <button type="submit" className="border border-slate-300 rounded-lg p-3 bg-gray-300 hover:bg-slate-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
