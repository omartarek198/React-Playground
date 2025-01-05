import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

import './PieChart.css';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: [
      'Health',
      'Subscriptions',
      'Eating out',
      'Family support',
      'Groceries',
      'Hygeine ',
      'Financial obligations',
    ],
    datasets: [
      {
        label: 'Spendings',
        data:  

[2829, 3313, 3932, 4449, 2201, 4507, 4706], // random values for privacy lol
        backgroundColor: [
          'rgba(238, 108, 77, 0.7)',  // Soft pink
          'rgba(102, 44, 145, 0.7)',  // Light blue
          'rgba(23, 163, 152, 0.7)',  // Yellow
          'rgba(51, 49, 46, 0.7)',  // Aqua
          'rgba(246, 16, 103, 0.7)', // Lavender
          'rgba(244, 244, 237, 0.7)',  // Orange
          'rgba(133, 203, 51, 0.7)',  // Hot pink
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 20, 147, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,  
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <div className="pie-chart-container"> <Pie data={data} options={options} /> </div>;
};

export default PieChart;
