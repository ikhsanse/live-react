import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate('/')

  const submitHandler = async (e) => {
    e.preventDefault();
    let dataLogin = {
        email,
        password
    }
    console.log(dataLogin)

    const response = await fetch("https://reqres.in/api/login", {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataLogin),
    });
    console.log(response)

    if(response.ok === true) {
        navigate('/')
    } else {
        navigate('/login')
    }
  };
  return (
    <div className="w-[400px] mx-auto mt-5">
      <h1 className="text-3xl">Login</h1>
      <form action="" onSubmit={submitHandler} className="w-2/3">
        <div className="border-2 border-slate-600 w-full">
          <input
            type="text"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border-2 border-slate-600">
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-sky-600 ">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
