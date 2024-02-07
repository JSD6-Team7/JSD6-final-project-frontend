import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ProgressBarChartJs = () => {
  const labels = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Duration",
        backgroundColor: "rgb(69, 174, 58)",
        borderColor: "rgb(69, 174, 58)",
        data: [13, 10, 5, 2, 20, 30, 45, 23],
      },
    ],
  };
  return (
    <div className="chart__container__bar" >
      <Bar data={data} />
    </div>
  );
};

export default ProgressBarChartJs;
