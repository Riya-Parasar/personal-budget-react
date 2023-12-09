import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const [barChartData, setBarChartData] = useState([40, 375, 93, 400, 400, 100, 50]);
  const [pieChartData, setPieChartData] = useState([40, 375, 93, 400, 400, 100, 50]);
  const [lineChartData, setLineChartData] = useState([65, 59, 80, 81, 56, 55, 40, 20, 21, 22, 23, 24]);

  const [barChartLabels, setBarChartLabels] = useState(['Eat out', 'Rent', 'Grocery', 'Shopping', 'Events', 'Holidays', 'Pets']);
  const [pieChartLabels, setPieChartLabels] = useState(['Eat out', 'Rent', 'Grocery', 'Shopping', 'Events', 'Holidays', 'Pets']);
  const [lineChartLabels] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);

  useEffect(() => {
    let barChart = null;
    let pieChart = null;
    let lineChart = null;

    const barData = {
      labels: barChartLabels,
      datasets: [{
        label: 'Bar Chart',
        data: barChartData,
        backgroundColor: [
          // Neon green colors
          'rgba(50, 205, 50, 0.5)',
          'rgba(154, 205, 50, 0.5)',
          'rgba(50, 205, 154, 0.5)',
          'rgba(124, 252, 0, 0.5)',
          'rgba(127, 255, 0, 0.5)',
          'rgba(0, 255, 127, 0.5)',
          'rgba(0, 100, 0, 0.5)',
        ],
        borderColor: [
          'rgba(50, 205, 50, 1)',
          'rgba(154, 205, 50, 1)',
          'rgba(50, 205, 154, 1)',
          'rgba(124, 252, 0, 1)',
          'rgba(127, 255, 0, 1)',
          'rgba(0, 255, 127, 1)',
          'rgba(0, 100, 0, 1)',
        ],
        borderWidth: 1,
      }],
    };

    const pieData = {
      labels: pieChartLabels,
      datasets: [{
        label: 'Pie Chart',
        data: pieChartData,
        backgroundColor: [
          // Neon green colors
          'rgba(50, 205, 50, 0.5)',
          'rgba(154, 205, 50, 0.5)',
          'rgba(50, 205, 154, 0.5)',
          'rgba(124, 252, 0, 0.5)',
          'rgba(127, 255, 0, 0.5)',
          'rgba(0, 255, 127, 0.5)',
          'rgba(0, 100, 0, 0.5)',
        ],
        hoverOffset: 4,
      }],
    };

    const lineData = {
      labels: lineChartLabels,
      datasets: [{
        label: 'Line Chart',
        data: lineChartData,
        fill: false,
        borderColor: 'rgba(101, 67, 33, 0.5)',
        tension: 0.1,
      }],
    };

    if (barChartRef.current) {
      barChart = new Chart(barChartRef.current, {
        type: 'bar',
        data: barData,
      });
    }

    if (pieChartRef.current) {
      pieChart = new Chart(pieChartRef.current, {
        type: 'pie',
        data: pieData,
      });
    }

    if (lineChartRef.current) {
      lineChart = new Chart(lineChartRef.current, {
        type: 'line',
        data: lineData,
      });
    }

    return () => {
      if (barChart) {
        barChart.destroy();
      }
      if (pieChart) {
        pieChart.destroy();
      }
      if (lineChart) {
        lineChart.destroy();
      }
    };
  }, [barChartData, pieChartData, lineChartData, barChartLabels, pieChartLabels, lineChartLabels]);

  const handleBarDataChange = (e, index) => {
    const newData = [...barChartData];
    newData[index] = parseInt(e.target.value, 10);
    setBarChartData(newData);
  };

  const handlePieDataChange = (e, index) => {
    const newData = [...pieChartData];
    newData[index] = parseInt(e.target.value, 10);
    setPieChartData(newData);
  };

  const handleLineDataChange = (e, index) => {
    const newData = [...lineChartData];
    newData[index] = parseInt(e.target.value, 10);
    setLineChartData(newData);
  };

  return (
    <div>
      <div className="chart-section">
        <h3>Bar Chart</h3>
        {barChartLabels.map((label, index) => (
          <div key={`bar_label_${index}`} className="chart-input">
            <input
              type="text"
              value={label}
              onChange={(e) => setBarChartLabels(e.target.value)}
              className="chart-label-input"
            />
            <input
              type="number"
              value={barChartData[index]}
              onChange={(e) => handleBarDataChange(e, index)}
              className="chart-data-input"
            />
          </div>
        ))}
        <canvas ref={barChartRef} />
      </div>

      <div className="chart-section">
        <h3>Pie Chart</h3>
        {pieChartLabels.map((label, index) => (
          <div key={`pie_label_${index}`} className="chart-input">
            <input
              type="text"
              value={label}
              onChange={(e) => setPieChartLabels(e.target.value)}
              className="chart-label-input"
            />
            <input
              type="number"
              value={pieChartData[index]}
              onChange={(e) => handlePieDataChange(e, index)}
              className="chart-data-input"
            />
          </div>
        ))}
        <canvas ref={pieChartRef} />
      </div>

      <div className="chart-section">
        <h3>Line Chart</h3>
        {lineChartLabels.map((label, index) => (
          <div key={`line_label_${index}`} className="chart-input">
            <input
              type="text"
              value={label}
              className="chart-label-input"
              readOnly // Make Line Chart labels read-only
            />
            <input
              type="number"
              value={lineChartData[index]}
              onChange={(e) => handleLineDataChange(e, index)}
              className="chart-data-input"
            />
          </div>
        ))}
        <canvas ref={lineChartRef} />
      </div>
    </div>
  );
};

export default ChartComponent;
