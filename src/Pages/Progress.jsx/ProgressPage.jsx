import "./ProgressPage.css";
import Layout from "../Layout";
import ProgressChart from "./ProgressChart";
import ProgressActivityCard from "./ProgressActivityCard";

function ProgressPage() {
  return (
    <Layout>
      <div className="progress">
        <div className='head'>
          <h2>Progress</h2>
          <p>Dec, 5 2023</p>
        </div>
        <ProgressChart />
        <ProgressActivityCard />
      </div>
    </Layout>
  );
}

export default ProgressPage;
