import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const ProgramLineChart = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Abacus',
        data: [30, 45, 28, 50, 42, 60, 75],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Robotics',
        data: [35, 40, 48, 65, 54, 70, 90],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
      {
        label: 'Chess',
        data: [20, 25, 22, 30, 35, 40, 45],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} />
    </div>
  );
};

export default ProgramLineChart;
