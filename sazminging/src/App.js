import React from 'react';
import logo from './sazlogo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {

  function getRandomMiningAmount() {
    return parseFloat(Math.random() * (0.01000000 - 0.00050000) + 0.00050000).toFixed(8);
  }

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Amount Mined (BTC)',
        data: [
          getRandomMiningAmount(),
          getRandomMiningAmount(),
          getRandomMiningAmount(),
          getRandomMiningAmount(),
          getRandomMiningAmount(),
          getRandomMiningAmount(),
          getRandomMiningAmount()
        ],
        backgroundColor: 'rgba(12, 159, 151, 0.2)',
        borderColor: 'rgba(12, 159, 151, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Mining Amounts per Day',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y} BTC`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day of the Week',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount Mined (BTC)',
        },
      },
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default App;
