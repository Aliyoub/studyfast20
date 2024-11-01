import { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

const ProgressChart = () => {
//   const chartRef = useRef(null);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'User Points',
          data: [12, 19, 3, 5],
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
  }, []);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default ProgressChart;
