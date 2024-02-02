import "./activityCardStyle.css";
import "./activityFormStyle.css";
import Layout from "../Layout";
import ActivityCard from "./ActivityCard";
import ActivityForm from "./ActivityForm";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import axios from "axios";

// const items = [
//   {
//     activityName: "swim",
//     description: "Have fun",
//     activityType: "swimming",
//     date: "",
//     hourGoal: 1,
//     minuteGoal: 30,
//     actualTime: "",
//     id: uuid(),
//   },
// ];

function ActivityList() {
  const [activityItems, setActivityItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formDisplay, setFormDisplay] = useState();

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
      .get("http://localhost:3000/activityInfo")
      .then((response) => {
        console.log(response);
        setActivityItems(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const createItem = (item) => {
    axios
      .post("http://localhost:3000/activityInfo", item)
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
