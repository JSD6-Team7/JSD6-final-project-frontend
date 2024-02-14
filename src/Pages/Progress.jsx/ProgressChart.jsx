import "./ProgressChart.css";
import ProgressBarChartJs from './ProgressBarChartJs';
import ProgressDonutChartJs from './ProgressDonutChartJs';
import { useEffect, useState } from "react";
import axios from "axios";

function ProgressChart() {
    const [activitysListbyTypes, setActivitysListbyTypes] = useState([]);
    const [activitysListbyDate, setActivitysListbyDate] = useState([]);
    const [reload, setReload] = useState(false);
    const apiKeyTypes = import.meta.env.VITE_REACT_APP_API_KEY;
    const apiKeyDate = import.meta.env.VITE_REACT_APP_API_KEY_DATE;


    useEffect(() => {
        const getDataTypes = async () => {
          const response = await axios.get(
            apiKeyTypes
          );
          setActivitysListbyTypes(response.data.data);
        };

        const getDataDate = async () => {
          const response = await axios.get(
            apiKeyDate
          );
          setActivitysListbyDate(response.data.data);
        };
    
        getDataTypes();
        getDataDate();

    }, [reload]);
    // test
    // console.log("date", activitysListbyDate);
    // console.log("types", activitysListbyTypes);

    return (
        <div className='chart'>
            <ProgressBarChartJs activitysListbyDate={activitysListbyDate} />
            <ProgressDonutChartJs activitysListbyTypes={activitysListbyTypes}/>
        </div>
    );
}


export default ProgressChart;