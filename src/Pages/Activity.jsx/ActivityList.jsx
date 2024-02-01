import "./activityCardStyle.css";
import "./activityFormStyle.css";
import Layout from "../Layout";
import ActivityCard from "./ActivityCard";
import ActivityForm from "./ActivityForm";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

const items = [
  {
    activityName: "swim",
    description: "Have fun",
    activityType: "swimming",
    date: "",
    hourGoal: 1,
    minuteGoal: 30,
    actualTime: "",
    id: uuid(),
  },
];

function ActivityList() {
  const [activityItems, setActivityItems] = useState(items);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formDisplay, setFormDisplay] = useState();

  useEffect(() => {
    console.log(formDisplay);
    if (formDisplay) {
      setIsFormOpen(true);
    }
  }, [formDisplay]);

  const createItem = (item) => {
    setActivityItems((prev) => {
      return [...prev, { ...item, id: uuid() }];
    });
    console.log(activityItems);
  };
  const deleteItem = (id) => {
    setActivityItems((prev) => {
      return prev.filter((each) => {
        return each.id !== id;
      });
    });
  };
  const updateItem = (item) => {
    console.log(item);
    setActivityItems((prev) => {
      return prev.map((each) => {
        if (each.id === item.id) {
          if (each.actualTime) return { ...item, actualTime: each.actualTime };
          else {
            return item;
          }
        } else {
          return each;
        }
      });
    });
  };

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
