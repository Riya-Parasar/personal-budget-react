import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const [barChartData, setBarChartData] = useState([40, 375, 93, 400, 400, 100, 50]);
  const [pieChartData, setPieChartData] = useState([40, 375, 93, 400, 400, 100, 50]);
  const [lineChartData, setLineChartData] = useState([65, 59, 80, 81, 56, 55, 40, 20, 21, 22, 23, 24]);

  const [barChartLabels, setBarChartLabels] = useState(['Eat out', 'Rent', 'Grocery', 'Shopping', 'Events', 'Holidays', 'Pets']);
  const [pieChartLabels, setPieChartLabels] = useState(['Eat out', 'Rent', 'Grocery', 'Shopping', 'Events', 'Holidays', 'Pets']);
  const [lineChartLabels, setLineChartLabels] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

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
      labels: pieChartLabels,
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
      labels: lineChartLabels,
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

  const handleBarLabelChange = (e, index) => {
    const newLabels = [...barChartLabels];
    newLabels[index] = e.target.value;
    setBarChartLabels(newLabels);
  };

  const handlePieLabelChange = (e, index) => {
    const newLabels = [...pieChartLabels];
    newLabels[index] = e.target.value;
    setPieChartLabels(newLabels);
  };

  const handleLineLabelChange = (e, index) => {
    const newLabels = [...lineChartLabels];
    newLabels[index] = e.target.value;
    setLineChartLabels(newLabels);
  };

  return (
    <div>
      <div>
        <h3>Bar Chart</h3>
        {barChartLabels.map((label, index) => (
          <div key={`bar_label_${index}`}>
            <input
              type="text"
              value={label}
              onChange={(e) => handleBarLabelChange(e, index)}
            />
            <input
              type="number"
              value={barChartData[index]}
              onChange={(e) => handleBarDataChange(e, index)}
            />
          </div>
        ))}
      </div>
      <canvas ref={barChartRef} />

      <div>
        <h3>Pie Chart</h3>
        {pieChartLabels.map((label, index) => (
          <div key={`pie_label_${index}`}>
            <input
              type="text"
              value={label}
              onChange={(e) => handlePieLabelChange(e, index)}
            />
            <input
              type="number"
              value={pieChartData[index]}
              onChange={(e) => handlePieDataChange(e, index)}
            />
          </div>
        ))}
      </div>
      <canvas ref={pieChartRef} />

      <div>
        <h3>Line Chart</h3>
        {lineChartLabels.map((label, index) => (
          <div key={`line_label_${index}`}>
            <input
              type="text"
              value={label}
              onChange={(e) => handleLineLabelChange(e, index)}
            />
            <input
              type="number"
              value={lineChartData[index]}
              onChange={(e) => handleLineDataChange(e, index)}
            />
          </div>
        ))}
      </div>
      <canvas ref={lineChartRef} />
    </div>
  );
};

export default ChartComponent;
