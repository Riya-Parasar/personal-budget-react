// Chart.js

/*import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);

  useEffect(() => {
    let barChart = null;
    let pieChart = null;
    let lineChart = null;

    const barData = {
      labels: ['Eat out', 'Rent', 'Grocery', 'Shopping', 'Events', 'Holidays', 'Pets'],
      datasets: [{
        label: 'Bar Chart',
        data: [40, 375, 93, 400, 400, 100, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(23, 45, 123, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(23, 45, 123, 1)',
        ],
        borderWidth: 1,
      }],
    };

    const pieData = {
      labels: ['Eat out', 'Rent', 'Grocery', 'Shopping', 'Events', 'Holidays', 'Pets'],
      datasets: [{
        label: 'Pie Chart',
        data: [40, 375, 93, 400, 400, 100, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(23, 45, 123, 0.5)',
        ],
        hoverOffset: 4,
      }],
    };

    const lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Line Chart',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
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
  }, []);

  return (
    <div>
      <canvas ref={barChartRef} />
      <canvas ref={pieChartRef} />
      <canvas ref={lineChartRef} />
    </div>
  );
};

export default ChartComponent;*/

// Chart.js

import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const [barChartData, setBarChartData] = useState([40, 375, 93, 400, 400, 100, 50]);
  const [pieChartData, setPieChartData] = useState([40, 375, 93, 400, 400, 100, 50]);
  const [lineChartData, setLineChartData] = useState([65, 59, 80, 81, 56, 55, 40]);

  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);

  useEffect(() => {
    let barChart = null;
    let pieChart = null;
    let lineChart = null;

    const barData = {
      labels: ['Eat out', 'Rent', 'Grocery', 'Shopping', 'Events', 'Holidays', 'Pets'],
      datasets: [{
        label: 'Bar Chart',
        data: barChartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(23, 45, 123, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(23, 45, 123, 1)',
        ],
        borderWidth: 1,
      }],
    };

    const pieData = {
      labels: ['Eat out', 'Rent', 'Grocery', 'Shopping', 'Events', 'Holidays', 'Pets'],
      datasets: [{
        label: 'Pie Chart',
        data: pieChartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(23, 45, 123, 0.5)',
        ],
        hoverOffset: 4,
      }],
    };

    const lineData = {
      labels: ['Eat out', 'Rent', 'Grocery', 'Shopping', 'Event', 'Holidays', 'Pets'],
      datasets: [{
        label: 'Line Chart',
        data: lineChartData,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
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
  }, [barChartData, pieChartData, lineChartData]);

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
      <div>
        <h3>Bar Chart</h3>
        {barChartData.map((dataPoint, index) => (
          <input
            key={`bar_${index}`}
            type="number"
            value={dataPoint}
            onChange={(e) => handleBarDataChange(e, index)}
          />
        ))}
      </div>
      <canvas ref={barChartRef} />

      <div>
        <h3>Pie Chart</h3>
        {pieChartData.map((dataPoint, index) => (
          <input
            key={`pie_${index}`}
            type="number"
            value={dataPoint}
            onChange={(e) => handlePieDataChange(e, index)}
          />
        ))}
      </div>
      <canvas ref={pieChartRef} />

      <div>
        <h3>Line Chart</h3>
        {lineChartData.map((dataPoint, index) => (
          <input
            key={`line_${index}`}
            type="number"
            value={dataPoint}
            onChange={(e) => handleLineDataChange(e, index)}
          />
        ))}
      </div>
      <canvas ref={lineChartRef} />
    </div>
  );
};

export default ChartComponent;
