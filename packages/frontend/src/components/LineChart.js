import { React } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '30 Day Stock Pricing',
      }
    }
};

const lineChartLabels = ['March', 'April'];
const lineChartDataDefault = {
    lineChartLabels,
    datasets: [
      {
        label: 'Dataset 1',
        data: { 'March': 50, 'April': 70 },
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
};

export default function LineChart({lineChartData}) {
    return (
        <div style={{height:"40vh",position:"relative", marginBottom:"1%", padding:"1%"}}>
            <Line
                options={lineChartOptions}
                data={lineChartData ? lineChartData : lineChartDataDefault}
            />
        </div>
    )
}

