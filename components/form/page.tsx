"use client";
import React from "react";
import { useFormik } from "formik";

interface FormValues {
  name: string;
  email: string;
  channel: string;
}

const Form: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values: FormValues) => {
    let errors: FormValues = {
      name: "",
      email: "",
      channel: "",
    };
  };

  const validate = (values: FormValues) => {
    let errors: FormValues = {
      name: "",
      email: "",
      channel: "",
    };
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)) {
      errors.email = "Invalied email format";
    }
    if (!values.channel) {
      errors.channel = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("Form Errors", formik.errors);

  return (
    <div className="w-screen flex justify-center h-screen items-center">
      <div className="w-[350px]">
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="px-2 py-1"
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
          <label htmlFor="email">E-mail</label>
          <input
            className="px-2 py-1"
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
          <label htmlFor="channel">Channel</label>
          <input
            className="px-2 py-1"
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? <div className="text-red-500">{formik.errors.channel}</div> : null}
          <button type="submit" className="border m-5 bg-slate-300 rounded-md p-3 hover:bg-slate-400 hover:text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
