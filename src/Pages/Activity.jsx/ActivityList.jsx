import "./activityCardStyle.css";
import "./activityFormStyle.css";
import Layout from "../Layout";
import ActivityCard from "./ActivityCard";
import ActivityForm from "./ActivityForm";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

function ActivityList() {
  const [activityItems, setActivityItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formDisplay, setFormDisplay] = useState(null);

  const userString = localStorage.getItem("user");
  const userObject = JSON.parse(userString);
  const user_id = userObject.user_id;
  const currentDate = new Date().toISOString();

  useEffect(() => {
    getActivityInfo();
  }, []);

  useEffect(() => {
    console.log(formDisplay);
    if (formDisplay) {
      setIsFormOpen(true);
    }
  }, [formDisplay]);

  const getActivityInfo = () => {
    axios
      .get(`http://localhost:3000/activityInfo/${user_id}?date=${currentDate}`)
      .then((response) => {
        console.log(response);
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

  const createItem = (item) => {
    const newActivity = { ...item, user_id };
    console.log(newActivity);
    axios
      .post("http://localhost:3000/activityInfo", newActivity)
      .then((response) => {
        if (response.status === 201) {
          getActivityInfo();
        }
      })
      .catch((error) => {
        console.error("Failed to add data", error);
      });
  };

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:3000/activityInfo/${id}`)
      .then((response) => {
        if (response.status === 200) {
          getActivityInfo();
        } else {
          console.log(`Response from API : ${response.json}`);
        }
      })
      .catch((error) => {
        console.error("Failed to delete", error);
      });
  };

  const updateItem = (item) => {
    console.log(item);
    axios
      .put("http://localhost:3000/activityInfo", item)
      .then((response) => {
        if (response.status === 200) {
          getActivityInfo();
        } else {
          console.error("Failed to update");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const createItem = (item) => {
  //   setActivityItems((prev) => {
  //     return [...prev, { ...item, id: uuid() }];
  //   });
  //   console.log(activityItems);
  // };
  // const deleteItem = (id) => {
  //   setActivityItems((prev) => {
  //     return prev.filter((each) => {
  //       return each.id !== id;
  //     });
  //   });
  // };
  // const updateItem = (item) => {
  //   console.log(item);
  //   setActivityItems((prev) => {
  //     return prev.map((each) => {
  //       if (each.id === item.id) {
  //         if (each.actualTime) return { ...item, actualTime: each.actualTime };
  //         else {
  //           return item;
  //         }
  //       } else {
  //         return each;
  //       }
  //     });
  //   });
  // };

  return (
    <Layout>
      <ActivityCard
        activityItems={activityItems}
        deleteItem={deleteItem}
        setFormDisplay={setFormDisplay}
        updateItem={updateItem}
      />
      <ActivityForm
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        createItem={createItem}
        updateItem={updateItem}
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
      />
    </Layout>
  );
}

export default ActivityList;
