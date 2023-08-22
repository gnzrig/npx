"use client";
import axios, { AxiosError } from "axios";
import { error } from "console";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { push } = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post("/api/auth/login", payload);
      push("/dashboard");
      alert(JSON.stringify(data));
    } catch (e) {
      const error = e as AxiosError;
      alert(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[400px] ">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button className="bg-orange-300 rounded-md p-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
