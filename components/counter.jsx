import React, { useState,useEffect } from 'react';

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
  };

  return (
    <div>
      <p>Current time:{time}</p>
      <button onClick={() => handleClick()}>Capture Time and Fibonacci</button>
      <p>Fibonacci series: {fibonacci.join(',')}</p>
    </div>
  );
}

export default Clock;