import "./ProgressPage.css";
import Layout from "../Layout";
import ProgressChart from "./ProgressChart";
import ProgressActivityCard from "./ProgressActivityCard";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import axios from "axios";

function ProgressPage() {
  const [queryDate, setQueryDate] = useState(dayjs(new Date()));
  const [activityItems, setActivityItems] = useState([]);
  // test variables
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVjYjZlMjQzNTU5NmQ1YmIyMGVjNGRhIiwidXNlcm5hbWUiOiJhbGljZSIsImVtYWlsIjoiYWxpY2VAZW1haWwuY29tIiwicGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNzA3OTI2ODY0LCJleHAiOjE3MDg1MzE2NjR9.PxZT-rPWyB0XYtHHbAmcGbm5-edufuuL0GihZYnl8uo";
  const user_id = "65cb6e2435596d5bb20ec4da";

  useEffect(() => {
    // Call the getActivityInfo function whenever queryDate changes
    getActivityInfo(queryDate);
    console.log("useEffect", queryDate);
  }, [queryDate]);

  const date = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    return <p className="activityCard-date">Today : {formattedDate}</p>;
  };

  const getActivityInfo = () => {
    console.log(queryDate);
    const userID_queryDate = { user_id, queryDate };
    axios
      .post("http://localhost:3000/activityInfoGetData", userID_queryDate, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // test
        console.log("userID_queryDate", userID_queryDate);
        console.log("response", response.data);
        setActivityItems((prev) => {
          return response.data.map((each) => {
            return { ...each, date: dayjs(each.date) };
          });
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    // test
    console.log("activityItems ",activityItems);
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
