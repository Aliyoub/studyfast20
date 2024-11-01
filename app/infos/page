'use client'

import { useEffect, useRef, useState } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

const GamifiedChart = () => {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [chartData, setChartData] = useState([0, 0, 0, 0]);

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const gainPoints = () => {
    setPoints(prevPoints => prevPoints + 10);
  };

  useEffect(() => {
    if (points >= 100) setLevel(2);
    if (points >= 200) setLevel(3);
  }, [points]);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
    // const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'User Points',
          data: chartData,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        }]
      },
      options: {
        scales: {
          x: { type: 'category' },
          y: { beginAtZero: true }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }
  }, [chartData]);

  // Simulate progress updates
  useEffect(() => {
    setChartData(prev => [...prev.slice(1), points]);
  }, [points]);

  return (
    <div>
      <h2>Your Gamified Progress</h2>
      <p>Points: {points}</p>
      <p>Level: {level}</p>
      <button onClick={gainPoints}>Gain Points</button>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default GamifiedChart;
