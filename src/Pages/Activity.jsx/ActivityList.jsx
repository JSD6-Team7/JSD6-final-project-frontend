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
    hourDuration: 1,
    minuteDuration: 30,
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
          return item;
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
