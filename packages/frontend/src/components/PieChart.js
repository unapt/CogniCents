import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import classes from '../styles/piechart.module.css';

function PieChart({ chartData, info }) {
  return (
    <div className={classes.container}>
      <h3>{info}</h3>
      <Pie data={chartData}></Pie>
    </div>
  );
}

export default PieChart;