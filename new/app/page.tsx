"use client" 
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string>("");
  const [output2, setOutput2] = useState<string>("");

  const handleClick = async () => {
    console.log(input);
    const response = await fetch("https://backend-bajaj-9lmj.onrender.com/bfhl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: input.split("")
      })
    });

    const data = await response.json();
    setOutput(JSON.stringify(data, null, 2));
  };

  const handleClick2 = async () => {
    const response = await fetch("https://backend-bajaj-9lmj.onrender.com/bfhl");
    const data = await response.json();
    console.log(data);
    setOutput2(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Enter array elements as a string (e.g., abc123)
      </h1>
      <input 
        className="border-2 border-gray-300 rounded-lg p-2 w-80 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter data..."
      />
      <button 
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={handleClick}
      >
        Submit
      </button>
      <pre className="mt-4 p-4 bg-white border rounded-lg shadow w-80 text-sm overflow-auto">
        {output}
      </pre>
      <button 
        className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        onClick={handleClick2}
      >
        Get Request
      </button>
      <pre className="mt-4 p-4 bg-white border rounded-lg shadow w-80 text-sm overflow-auto">
        {output2}
      </pre>
    </div>
  );
}

export default App;