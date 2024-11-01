import { useEffect, useState } from 'react';
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from 'chart.js';

// import { Line } from 'react-chartjs-2';

import { addPoints, getUserPerformance } from '../gamify/gamify';

const Performance = () => {

    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);


    const [user, setUser] = useState({ points: 0, badges: [] });
    const [performanceHistory, setPerformanceHistory] = useState([]);

    // Initialize the chart data
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: 'User Points',
            data: [],
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
        }],
    });

    // Simulate user performance updates
    useEffect(() => {


        const ctx = document.getElementById('myChart').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [{
                    label: 'Sales',
                    data: [65, 59, 80, 81],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'category',
                        ticks: {
                            autoSkip: false
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const interval = setInterval(() => {
            // Simulate adding random points to the user
            const pointsToAdd = Math.floor(Math.random() * 10) + 1;
            addPoints(user, pointsToAdd);
            const performance = getUserPerformance(user);

            setUser({ ...user });
            setPerformanceHistory([...performanceHistory, performance.points]);

            // Update the chart data
            setChartData({
                labels: performanceHistory.map((_, index) => `Day ${index + 1}`),
                datasets: [{
                    ...chartData.datasets[0],
                    data: performanceHistory,
                }],
            });
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
        // return <canvas id="myChart"></canvas>;
    }, [user, performanceHistory]);

    return (
        <div>
            <h1>User Performance</h1>

            <div>
                <h2>Points Over Time</h2>
                <CategoryScale data={chartData} />
            </div>

            <div>
                <h2>Badges Earned</h2>
                <ul>
                    {user.badges.map((badge, index) => (
                        <li key={index}>{badge}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Performance;