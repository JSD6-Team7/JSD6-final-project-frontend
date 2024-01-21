import ActivityCard from "./ActivityCard";
import ActivityForm from "./ActivityForm";
import Layout from "../Layout";

function ActivityList() {
  return (
    <Layout>
      <div className="activityList">
        <ActivityCard />
        <ActivityForm />
      </div>
    </Layout>
  );
}
export default ActivityList;
