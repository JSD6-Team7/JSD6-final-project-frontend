import Layout from "../Layout.jsx";
import "./TutorialCSS.css";
import Accordian from "../Tutorial/Accordioncard.jsx";
import Addvideo from "../Tutorial/Addvideo.jsx";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";



// const data = [
//   {
//       label: "What a cool label",
//       video: "https://www.youtube.com/embed/AnYl6Nk9GOA",
//       descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus, felis eget tincidunt sollicitudin, tortor lacus varius odio, vitae elementum dolor velit ut sapien. Nulla facilisi. Phasellus luctus diam in tortor laoreet, quis laoreet dui sagittis. Fusce in arcu vel ipsum pharetra feugiat non vitae dolor. Suspendisse potenti. Praesent accumsan sagittis massa, vitae commodo erat facilisis et. Morbi mauris risus, semper at imperdiet et, tincidunt eget quam. Praesent commodo eros ut ipsum condimentum, a pulvinar tortor sollicitudin. Mauris ultricies eros neque, in finibus erat consequat laoreet. Nullam ultrices mollis nulla, non dictum ex cursus mattis. Praesent tincidunt sodales tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ultrices tellus vel neque accumsan tempus id quis augue. Donec eu placerat tellus. Sed justo velit, sagittis eu mi elementum, tempor lacinia leo. Suspendisse faucibus augue vitae semper congue. Sed viverra, dui sit amet viverra aliquet, metus ipsum faucibus urna, vel porttitor felis neque vel tortor. Nulla maximus sit amet elit eget posuere. Pellentesque iaculis nisi orci, non dictum justo finibus vitae. Maecenas nisi ipsum, aliquet gravida pellentesque vitae, sodales id purus. Vestibulum imperdiet lorem sit amet urna tempus consectetur. Sed non nibh nisi. Nunc tempor sapien neque, eu malesuada risus condimentum sit amet.",
//   },
//   {
//       label: "What a cool label",
//       video: "https://www.youtube.com/embed/zpJXXn_-XuY",
//       descriptions: "",
//   },
// ];

// const newData = data.map((item, index) => ({ ...item, index }));
// const items = newData;

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
    console.log(formDisplay);
    if (formDisplay) {
      setIsFormOpen(true);
    }
  }, [formDisplay]);

  const getVideoInfo = () => {
    axios
      .post(`http://localhost:3000/tutorialsGetData`, {user_id}, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setAccordionItems(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const createItem = (item) => {
    console.log(item);
    const newVideo = { ...item, user_id };
    axios
      .post("http://localhost:3000/tutorialsCreateData", newVideo, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
          getVideoInfo();
        }
      })
      .catch((error) => {
        console.error("Failed to add data", error);
      });
  };

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:3000/tutorials/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        if (response.status === 200) {
          getVideoInfo();
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
      .put("http://localhost:3000/tutorials", item, {
        headers: { Authorization: `Bearer ${token}` }
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
          <Accordian keepOthersOpen={false}
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