import "./ProgressPage.css";
import Layout from "../Layout";
import ProgressChart from "./ProgressChart";
import ProgressActivityCard from "./ProgressActivityCard";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

function ProgressPage() {
  const [queryDate, setQueryDate] = useState(dayjs(new Date()));
  
  useEffect(() => {
    // Call the getActivityInfo function whenever queryDate changes
    // getActivityInfo(queryDate);
    console.log("useEffect", queryDate);
  }, [queryDate]);

  const date = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    return <p className="activityCard-date">Today : {formattedDate}</p>;
  };

  const getActivityInfo = () => {
    console.log(selectedDate);
    const userID_selectedDate = { user_id, selectedDate };
    axios
      .post("http://localhost:3000/activityInfoGetData", userID_selectedDate, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setActivityItems((prev) => {
          return response.data.map((each) => {
            return { ...each, date: dayjs(each.date) };
          });
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const onSelectedDateChange = (date) => {
    setQueryDate(date);
  };

  return (
    <Layout>
      <div className="progress">
        <div className='head'>
          <h2>Progress</h2>
          {/* {date()} */}
          <DatePicker
            onChange={onSelectedDateChange}
            defaultValue={dayjs(new Date())}
      />
        </div>
        <ProgressChart />
        <ProgressActivityCard />
      </div>
    </Layout>
  );
}

export default ProgressPage;
