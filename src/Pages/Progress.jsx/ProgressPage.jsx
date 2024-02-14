import "./ProgressPage.css";
import Layout from "../Layout";
import ProgressChart from "./ProgressChart";
import ProgressActivityCard from "./ProgressActivityCard";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import axios from "axios";
import { Content } from "antd/es/layout/layout";

function ProgressPage() {
  const [activityItems, setActivityItems] = useState([]);
  const [queryDate, setQueryDate] = useState(dayjs(new Date()));

  // get user data from localStorage
  const userString = localStorage.getItem("user");
  const userObject = JSON.parse(userString);
  const user_id = userObject.user_id;
  const token = userObject.token;

  useEffect(() => {
    // Call the getActivityInfo function whenever queryDate changes
    if (queryDate) {
      getActivityInfo();
    }
    // console.log("useEffect", queryDate);
  }, [queryDate]);

  useEffect(() => {
    getActivityInfo();
  }, []);

  const date = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    return <p className="activityCard-date">{formattedDate}</p>;
  };

  const getActivityInfo = () => {
    const apiKeyGetActivityInfo = import.meta.env
      .VITE_REACT_APP_API_KEY_ACTIVITY_INFO;

    // test queryDate
    console.log("queryDate", queryDate);

    const userID_queryDate = { user_id, selectedDate: queryDate };

    axios
      .post(apiKeyGetActivityInfo, userID_queryDate, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // test
        console.log("userID_queryDate", userID_queryDate);
        console.log("response", response.data);

        //   setActivityItems((prev) => {
        //     return response.data.map((each) => {
        //       return { ...each, date: dayjs(each.date) };
        //     });
        //   });
        // })
        setActivityItems((prev) => {
          return response.data
            .map((each) => ({ ...each, date: dayjs(each.date) }))
            .filter((item) => item.actualTime);
        });
      })

      .catch((error) => {
        console.error("Error: ", error);
      });
    // test
    const activityItemsActual = activityItems.filter((item) => {
      return item.actualTime;
    });

    // setActivityItems(activityItemsActual);
    console.log("activityItemsActual ", activityItemsActual);
    console.log("activityItems ", activityItems);
  };

  const onSelectedDateChange = (date) => {
    setQueryDate(date);
  };

  return (
    <Layout>
      <div className="progress">
        <div className="head">
          <h2>Progress</h2>
          {date()}
          <div style={{ "margin-top": "10px" }}>
            <DatePicker
              onChange={onSelectedDateChange}
              defaultValue={dayjs(new Date())}
            />
          </div>
        </div>
        <ProgressChart />
        <Content style={{ height: "390px", width: "auto",overflow: "auto" }}>
          {activityItems.map((item, index) => {
            return (
              <ProgressActivityCard
                key={item._id}
                index={index}
                eachCardItem={item}
              />
            );
          })}
        </Content>
      </div>
    </Layout>
  );
}

export default ProgressPage;
