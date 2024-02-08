import "./ProgressChart.css";
import ProgressBarChartJs from './ProgressBarChartJs';
import ProgressDonutChartJs from './ProgressDonutChartJs';

function ProgressChart() {
    return (
        <div className='chart'>
            <ProgressBarChartJs />
            <ProgressDonutChartJs />
        </div>
    );
}


export default ProgressChart;