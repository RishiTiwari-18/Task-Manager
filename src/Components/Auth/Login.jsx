import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("")
    setPassword("")

  };

  return (
    <div className="h-full max-sm:hidden w-full flex items-center justify-center bg-[#0000004a]">
      <div className="h-[80%] w-[70%] overflow-hidden flex rounded-xl">
        <div className="w-1/2 h-full bg-[#ededed] p-10">
          <h1 className="text-2xl font-semibold text-black">Welcome!</h1>
        </div>
        <div className="w-1/2 h-full p-10 flex flex-col bg-white">
          <h1 className="text-2xl mb-10 font-semibold">Log in</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-xs uppercase text-zinc-500">Email:</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)                
              }}
              value={email}
              required
              id="email"
              type="email"
              className="px-4 text-base outline-none placeholder:text-zinc-300 border-b mb-6 text-black py-4 w-full"
              placeholder="Enter Email"
            />
            <label htmlFor="password" className="text-xs uppercase text-zinc-500">Password:</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
              required
              id="password"
              type="password"
              className="px-4 text-base outline-none border-b placeholder:text-zinc-300 mb-12 text-black py-4 w-full"
              placeholder="Enter Password"
            />
            <button className="bg-[#202020] text-white px-4 py-4 w-full rounded-md text-base">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
