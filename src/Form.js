import React, { useEffect, useState } from "react";

const Form = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
   
  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handleData(e) { 
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {  
      alert("All field are Mandatory !!");
    } else {
      setFlag(true);
    console.log(inputData);
    }
  } 

  return (
    <>
      <form
        className=" mx-auto mt-5 flex flex-col gap-2 items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="bg-teal-500 text-4xl font-bold mt-5 p-2 w-fit">
          Registration Form
        </h1>
        <div>
          <input
            type="text" 
            placeholder="Enter your Name"
            name="name"
            value={inputData.name}
            onChange={handleData}
            className="bg-gray-200 p-4 w-[30rem] outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
            className="bg-gray-200 p-4 w-[30rem] outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
            className="bg-gray-200 p-4 w-[30rem] outline-none"
          />
        </div>
        <div>
          <button type="submit" className="bg-green-500 p-2 rounded-sm">
            Submit
          </button>
        </div>
      </form>
      <pre>
        {flag ? (
          <h2 className="text-center m-3 font-semibold">
            Hello {inputData.name}, You've Registered Successfully
          </h2>
        ) : (
          ""
        )}
      </pre>
    </>
  );
};

export default Form;
