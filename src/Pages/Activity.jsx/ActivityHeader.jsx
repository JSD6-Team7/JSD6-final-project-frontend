import { Button } from "antd";

function ActivityHeader({ setFormDisplay }) {
  const emptyFields = {
    activityName: "",
    description: "",
    activityType: "",
    date: "",
    hourGoal: "",
    minuteGoal: "",
  };
  const date = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    return <p className="activityHeader-date">{formattedDate}</p>;
  };

  return (
    <div>
      <h2>Welcome</h2>
      <div className="activityHeader-line2">
        {date()}
        <Button
          ghost
          className="activityHeader-addButton"
          onClick={() => setFormDisplay({ ...emptyFields })}
        >
          + Activity
        </Button>
      </div>
      <div className="activityHeader-ListmemuLabel">List Menu</div>
    </div>
  );
}

export default ActivityHeader;
