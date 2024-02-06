import "./ProgressChart.css";
import ProgressBarChartJs from './ProgressBarChartJs';
import ProgressDonutChartJs from './ProgressDonutChartJs';
import { useEffect, useState } from "react";
import axios from "axios";
// import {env} from 'node:process';

function ProgressChart() {
    const [activitysListbyTypes, setActivitysListbyTypes] = useState([]);
    const [activitysListbyDate, setActivitysListbyDate] = useState([]);
    const [reload, setReload] = useState(false);
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;


    useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            apiKey
          );
          setActivitysListbyTypes(response.data);
        };
    
        getData();
    }, [reload]);

    // don't forget console.log
    console.log(activitysListbyTypes);
    console.log(activitysListbyDate);
    console.log(apiKey);




    return (
        <div className='chart'>
            <ProgressBarChartJs activitysListbyDate={activitysListbyDate} />
            <ProgressDonutChartJs activitysListbyTypes={activitysListbyTypes}/>
        </div>
    );
}


export default ProgressChart;