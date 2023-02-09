import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [fibonacci, setFibonacci] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    const date = new Date();
    setTime(date.toLocaleTimeString());

    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds();
    let firstDigit = parseInt(minutes[0]);
    let secondDigit = parseInt(minutes[1]);
    let count = seconds
    let result = [firstDigit, secondDigit];
    let next = firstDigit + secondDigit;
    let i = 2;

    while (i < (count + 2)) {
      result.push(next);
      firstDigit = secondDigit;
      secondDigit = next;
      next = firstDigit + secondDigit;
      i++;
    }
    result.sort((a, b) => b - a)
    result.join(',')
    setFibonacci(result);
    console.log(result)
  };

  return (
    <div className='flex flex-col items-center justify-center bg-gray-900 w-full h-auto min-h-screen overflow-hidden pt-4'>
      <div className='flex flex-col items-center justify-center mb-4'>
        <p className='text-white font-bold'>Current time:</p>
        <span className='font-bold text-6xl md:text-8xl text-white'> {time}</span>
      </div>
      <button onClick={() => handleClick()} className="px-3 py-3 bg-blue-400 rounded-xl font-bold mb-4">Crear serie Fibonacci</button>
      <div className='w-full h-auto flex flex-col justify-center items-center'>
        <ul className='flex flex-col items-center justify-center'>
          {fibonacci.map((fib, index) => (
            <li className='text-white' key={index}>:{fib}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Clock;