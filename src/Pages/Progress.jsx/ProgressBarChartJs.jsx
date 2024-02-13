import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const ProgressBarChartJs = ( {activitysListbyDate}) => {
  const dataBydate = [0, 0, 0, 0, 0, 0, 0];

  activitysListbyDate.map((item) => {
    dataBydate[item._id.dayOfWeek - 1] = item.totalActualTime ;
  });

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
        backgroundColor: "rgba(69, 174, 58, 0.8)",
        borderColor: "rgba(69, 174, 58, 1)",
        data: dataBydate,
      },
    ],
  };
  return (
    <div className="chart__container__bar" >
      <h4 style={{"text-align":"center"}}>Activity by Day</h4>
      <Bar data={data} />
    </div>
  );
};

export default ProgressBarChartJs;
