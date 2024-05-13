import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// Manually create sample data
const sampleData = [400, 300, 600, 700, 500, 800, 900];

// Find the maximum value in the data
const maxValue = Math.max(...sampleData);

// Function to calculate color based on value
const calculateColor = (value) => {
  // If the value is the maximum, return blue
  if (value === maxValue) {
    return "#013a8c";
  }
  // Otherwise, return a default color for lower values
  return "#c0d9ff";
};

// Generate dataset with dynamically calculated background colors
const dataset = {
  label: "Dataset 1",
  data: sampleData,
  backgroundColor: sampleData.map(value => calculateColor(value)),
};

export const data = {
  labels,
  datasets: [dataset],
};

const BarChart = () => {
  return (
      <Bar data={data} options={options} />
  );
};

export default BarChart;
