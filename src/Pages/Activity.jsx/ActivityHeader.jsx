import { Button, DatePicker, Flex } from "antd";
import dayjs from "dayjs";

function ActivityHeader({ setFormDisplay, setSelectedDate }) {
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

  const onSelectedDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
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

      <div className="activityHeader-ListmemuLabel">
        <Flex justify="space-between" align="center">
          <h4>List Menu</h4>
          <DatePicker
            onChange={onSelectedDateChange}
            defaultValue={dayjs(new Date())}
          />
        </Flex>
      </div>
    </div>
  );
}

export default ActivityHeader;
