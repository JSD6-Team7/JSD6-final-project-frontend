import "./ProgressPage.css";
import Layout from "../Layout";
import ProgressChart from "./ProgressChart";
import ProgressActivityCard from "./ProgressActivityCard";

function ProgressPage() {
  const date = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    return <p className="activityCard-date">{formattedDate}</p>;
  };
  return (
    <Layout>
      <div className="progress">
        <div className='head'>
          <h2>Progress</h2>
          {date()}
        </div>
        <ProgressChart />
        <ProgressActivityCard />
      </div>
    </Layout>
  );
}

export default ProgressPage;
