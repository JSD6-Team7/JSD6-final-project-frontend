import "./activityCardStyle.css";
import "./activityFormStyle.css";
import Layout from "../Layout";
import ActivityCard from "./ActivityCard";
import ActivityForm from "./ActivityForm";
import { v4 as uuid } from "uuid";
import { useState } from "react";

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
  {
    activityName: "weight trainning",
    description: "Exciting",
    activityType: "body weight",
    date: "",
    hourDuration: 0,
    minuteDuration: 20,
    id: uuid(),
  },
];

function ActivityList() {
  const [activityItems, setActivityItems] = useState(items);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editedItem, setEditedItem] = useState();

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
    setActivityItems((prev) => {
      return prev.map((each) => {
        if (each.id === item.id) {
          return item;
        }
        return each;
      });
    });
  };

  return (
    <Layout>
      <ActivityCard
        activityItems={activityItems}
        setIsFormOpen={setIsFormOpen}
        deleteItem={deleteItem}
        setEditedItem={setEditedItem}
      />
      <ActivityForm
        isFormOpen={isFormOpen}
        createItem={createItem}
        updateItem={updateItem}
        editedItem={editedItem}
      />
    </Layout>
  );
}

export default ActivityList;
