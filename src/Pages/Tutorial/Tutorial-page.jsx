import Layout from "../Layout.jsx";
import "./TutorialCSS.css";
import Accordian from "../Tutorial/Accordioncard.jsx";
import Addvideo from "../Tutorial/Addvideo.jsx";
import axios from "axios";
import React, { useEffect, useState } from "react";

const apiKeyGetTutorials = import.meta.env
  .VITE_REACT_APP_API_KEY_GET_TUTORIALS_INFO;
const apiKeyCreateTutorials = import.meta.env
  .VITE_REACT_APP_API_KEY_CREATE_TUTORIALS_INFO;
const apiKeyDeleteTutorials = import.meta.env
  .VITE_REACT_APP_API_KEY_DELETE_TUTORIALS_INFO;
const apiKeyUpdateTutorials = import.meta.env
  .VITE_REACT_APP_API_KEY_UPDATE_TUTORIALS_INFO;

function TutorialPage() {
  const [accordionItems, setAccordionItems] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formDisplay, setFormDisplay] = useState(null);

  const userString = localStorage.getItem("user");
  const userObject = JSON.parse(userString);
  const user_id = userObject.user_id;
  const token = userObject.token;

  // useEffect(() => {
  //   if (items) {
  //     setAccordionItems([
  //       ...items.map(item => ({
  //         ...item,
  //         toggled: false
  //       }))
  //     ])
  //   }
  // }, [items])

  useEffect(() => {
    getVideoInfo();
  }, []);

  useEffect(() => {
    // console.log(formDisplay);
    if (formDisplay) {
      setIsFormOpen(true);
    }
  }, [formDisplay]);

  const getVideoInfo = () => {
    axios
      .post(
        apiKeyGetTutorials,
        { user_id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setAccordionItems(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const createItem = (item) => {
    // console.log(item);
    const swapUrl = item.video.replace("watch?v=", "embed/");
    const newVideo = { ...item, user_id, video: swapUrl };
    axios
      .post(apiKeyCreateTutorials, newVideo, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 201) {
          // console.log(response.data);
          getVideoInfo();
        }
      })
      .catch((error) => {
        console.error("Failed to add data", error);
      });
  };

  const deleteItem = (id) => {
    axios
      .delete(`${apiKeyDeleteTutorials}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          getVideoInfo();
        } else {
          // console.log(`Response from API : ${response.json}`);
        }
      })
      .catch((error) => {
        console.error("Failed to delete", error);
      });
  };

  const updateItem = (item) => {
    // console.log(item);
    const swapUrl = item.video.replace("watch?v=", "embed/");
    const newVideo = { ...item, video: swapUrl };
    axios
      .put(apiKeyUpdateTutorials, newVideo, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          getVideoInfo();
        } else {
          console.error("Failed to update");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // useEffect(() => {
  //   console.log(formDisplay);
  //   if (formDisplay) {
  //     setIsFormOpen(true);
  //   }
  // }, [formDisplay]);

  // const createItem = (item) => {
  //   setAccordionItems((prev) => {
  //     return [...prev, { ...item, id: uuid(), index: prev.length}];
  //   });
  // };
  // const deleteItem = (id) => {
  //   setAccordionItems((prev) => {
  //     return prev.filter((each) => {
  //       return each.id !== id;
  //     });
  //   });
  // };
  // const updateItem = (item) => {
  //   console.log(item);
  //   setAccordionItems((prev) => {
  //     return prev.map((each) => {
  //       if (each.id === item.id) {
  //         return item;
  //       } else {
  //         return each;
  //       }
  //     });
  //   });
  // };

  return (
    <Layout>
      <Accordian
        keepOthersOpen={false}
        accordionItems={accordionItems}
        setAccordionItems={setAccordionItems}
        deleteItem={deleteItem}
        setFormDisplay={setFormDisplay}
      />
      <Addvideo
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
export default TutorialPage;
