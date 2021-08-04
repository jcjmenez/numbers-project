import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Collatz = () => {
  const [numberInput, setNumberInput] = useState(0);
  const [values, setValues] = useState([]);
  const [iterations, setIterations] = useState([]);

  const calculateCollatz = (number) => {
    let result = Number(number);
    const data = [result];
    while (result !== 1) {
      if (result % 2 === 0) {
        result /= 2;
      } else {
        result = (3 * result) + 1;
      }
      data.push(result);
    }
    setValues(data);
  };

  useEffect(() => {
    const times = [];
    for (let i = 0; i < values.length; i += 1) {
      times.push(i);
    }
    setIterations(times);
    setValues(values);
    // Change left values with values
  }, [values]);

  const state = {
    labels: iterations,
    datasets: [
      {
        label: 'Value',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(122,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: values,
      },
    ],
  };

  // Change this on input
  const handleNumberChange = (event) => {
    setNumberInput(event.target.value);
  };

  return (
    <>
      <div className="collatz">
        <h1>Collatz conjecture</h1>
      </div>
      <div className="form-field">
        <p>Input a number to calculate its collatz sequence</p>
        <form onSubmit={(event) => {
          event.preventDefault();
          calculateCollatz(numberInput);
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
      <div className="chart">
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: 'Collatz conjecture visualization',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>

    </>
  );
};

export default Collatz;
