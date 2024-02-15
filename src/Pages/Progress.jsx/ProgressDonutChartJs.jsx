import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressDonutChartJs = ({activitysListbyTypes}) => {
  const durationByTypes = [];
  const labelByTypes = [];
  for (let i = 0; i < activitysListbyTypes.length; i++) {
    durationByTypes.push(activitysListbyTypes[i].total_duration);
    labelByTypes.push(activitysListbyTypes[i]._id);
  };

  const data = {
    labels: labelByTypes,
    datasets: [
      {
        label: 'Actual Duration Seconds',
        data: durationByTypes,
    
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        // ],

        backgroundColor: [
          'rgba(50,205,50, 0.2)', //limegreen
          'rgba(107,142,35, 0.2)', //olivedrab
          'rgba(173,255,47, 0.2)', //greenyellow
          'rgba(0,255,127, 0.2)', //springgreen
          'rgba(124,252,0, 0.2)', //lawngreen
        ],

        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',  
        // ],

        borderColor: [
          'rgba(50,205,50,1)',
          'rgba(107,142,35,1)',
          'rgba(173,255,47, 1)',
          'rgba(0,255,127, 1)',
          'rgba(124,252,0, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      }
    },
  };

  return (
    <div className="chart__container__donut" >
      <h4 style={{"text-align":"center"}}>Activities Types this Week</h4>
      <Doughnut data={data} />
    </div>
  );
}

export default ProgressDonutChartJs;