import React, { useState } from 'react';

import './Fibonacci.css';

const Fibonacci = () => {
  const [numberInput, setNumberInput] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [status, setStatus] = useState('');

  // MAX = 1478 => INFINITY
  const calculateFib = (number) => {
    if (number < 0 || number > 1478) {
      const s = number < 0 ? 'Number must be positive' : 'Number must be less than 1478 (Infinity)';
      setStatus(s);
    } else {
      setStatus('');
      if (number < 2) {
        if (Number(number) === 0) {
          setSequence([0]);
        } else {
          setSequence([0, 1]);
        }
      } else {
        const numbers = [0, 1];
        for (let i = 2; i <= number; i += 1) {
          numbers[i] = numbers[i - 2] + numbers[i - 1];
        }
        setSequence(numbers);
      }
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
      <div className="form-field">
        <p>Input a number to calculate its fibonacci sequence</p>
        <form onSubmit={(event) => {
          event.preventDefault();
          calculateFib(numberInput);
        }}
        >
          <input
            placeholder="0"
            type="number"
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
};
export default Fibonacci;
