import "./ProgressPage.css";
import Layout from "../Layout";
import ProgressChart from "./ProgressChart";
import ProgressActivityCard from "./ProgressActivityCard";

function ProgressPage() {
  return (
    <Layout>
      <div>
        <ProgressChart />
        <ProgressActivityCard />
      </div>
    </Layout>
  );
}

export default ProgressPage;
