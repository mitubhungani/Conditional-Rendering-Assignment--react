import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    if (operation === '+') {
      setResult(Number(num1) + Number(num2));
    } else if (operation === '-') {
      setResult(Number(num1) - Number(num2));
    } else if (operation === '*') {
      setResult(Number(num1) * Number(num2));
    } else if (operation === '/') {
      if (num2 === '0') {
        alert('Cannot divide by zero');
        return;
      }
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Calculator</h1>
        <div className="flex items-center mb-4">
          <input
            type="number"
            placeholder="Enter first number"
            onChange={(e) => setNum1(e.target.value)}
            className="border-2 rounded-md p-2 mr-2 text-center w-36"
          />
          <input
            type="number"
            placeholder="Enter second number"
            onChange={(e) => setNum2(e.target.value)}
            className="border-2 rounded-md p-2 mr-2 text-center w-36"
          />
        </div>
        <div className="flex justify-center space-x-2 mb-4">
          <button onClick={() => handleCalculation("+")} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
          <button onClick={() => handleCalculation("-")} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Subtract
          </button>
          <button onClick={() => handleCalculation("*")} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Multiply
          </button>
          <button onClick={() => handleCalculation("/")} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Divide
          </button>
        </div>
        {result !== null && (
          <h2 className={`text-xl mb-4 text-center ${result > 0 ? 'text-red-500' : result === 0 ? 'text-orange-500' : 'text-green-500'}`}>
            Result: {result}
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
