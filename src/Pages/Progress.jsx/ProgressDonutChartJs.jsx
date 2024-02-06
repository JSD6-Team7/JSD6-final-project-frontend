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

  // don't forget to delete console.log
  console.log(durationByTypes);
  console.log(labelByTypes);
  console.log(activitysListbyTypes);

  const data = {
    labels: labelByTypes,
    datasets: [
      {
        label: '# of Votes',
        // data: [durationByTypes["body weight"], 19, 3, 5, 2],
        data: durationByTypes,
    
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
         
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
         
          
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart__container__donut" >
      <Doughnut data={data} />
    </div>
  );
}

export default ProgressDonutChartJs;