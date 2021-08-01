import React, { useState } from 'react';

import './Fibonacci.css';

function Fibonacci() {
  const [numberInput, setNumberInput] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [status, setStatus] = useState('');

  // MAX = 163
  const calculateFib = (number) => {
    const numbers = [0, 1];
    if (number < 2 || number > 163) {
      const s = number < 2 ? 'Number must be greater than 2' : 'Number must be less than 163';
      setStatus(s);
    } else {
      setStatus('');
      for (let i = 2; i < number; i += 1) {
        numbers[i] = numbers[i - 2] + numbers[i - 1];
      }
      setSequence(numbers);
    }
  };

  const handleNumberChange = (event) => {
    setNumberInput(event.target.value);
  };

  return (
    <>
      <div className="fibonacci">
        <h1>Fibonacci Sequence Visualization</h1>
      </div>
      <div className="status">
        <p>{status}</p>
      </div>
      <div className="input">
        <p>Input a number to calculate its fibonacci</p>
        <form onSubmit={(event) => {
          event.preventDefault();
          calculateFib(numberInput);
        }}
        >
          <input
            value={numberInput}
            onChange={handleNumberChange}
          />
          <br />
          <button type="submit">Calculate</button>
        </form>
      </div>
      <div className="app">
        <div className="visual-box">
          {sequence.map((value, index) => (
            <div key={index === 1 ? -1 : value} className="number fade-in-div"><p>{value}</p></div>
          ))}
        </div>
      </div>

    </>
  );
}
export default Fibonacci;
