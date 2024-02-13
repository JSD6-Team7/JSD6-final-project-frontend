// import React, { useEffect, useState } from 'react';
import { Button, Modal } from "antd";
import { PlusCircleFilled, MinusCircleFilled, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons'

const emptyFields = {
  videoLink: "",
  videoTitle: "",
  description: "",
};

const Accordion = ( { keepOthersOpen, accordionItems, setAccordionItems, deleteItem, setFormDisplay, updateItem, } ) => {

  function handleAccordionToggle(clickedItem) {
    setAccordionItems([
      ...accordionItems.map((item) => {
        let toggled = item.toggled

        if (clickedItem.id === item.id) {
          toggled = !item.toggled
        } else if (!keepOthersOpen) {
          toggled = false
        }
        return  {
          ...item,
          toggled
        }
      })
    ])
  };

  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Are you sure to delete this activity?",
      icon: <ExclamationCircleFilled />,
      centered: true,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteItem(id);
      },
    });
  };

  const handleFinish = (item) => {
    const updatedFields = {
      ...item,
    };
    updateItem(updatedFields);
  };

  return( 
    <div className='accordion-parent'>
      <div className='headunderline'>
        <h2 className='headunderline-item'>Video Tutorial</h2>
        <div>
          <Button 
            ghost          
            className='headunderline-button'          
            onClick={() => setFormDisplay({ ...emptyFields })}
          >
            + Video
          </Button>
        </div>
      </div>
      {accordionItems?.map((listItem, key) => {
        return (
          
          <div class={`accordion ${listItem.toggled ? 'toggled' : ''}`} key={key}>
            <button className='toggle' onClick={() => handleAccordionToggle(listItem)}>
              <div className='labelcard'>
                <div className='number-highlighted'>
                  <p>{listItem.index + 1}</p>
                </div>
                <p className='labelheadline'>{listItem.label}</p>
              </div>
              <div className='direction-indicator'>{listItem.toggled ? <MinusCircleFilled /> : <PlusCircleFilled />}</div>
            </button>
            <div className='content-parent'>
              <div className='content'>
                <iframe src={listItem.video} width="784" height="441" frameborder="0" allowfullscreen="true"></iframe>
                <div className="sub-content-head">
                  <label>Descriptions:</label> 
                  <div className="button-section">
                    <Button className="penbutton" onClick={() => setFormDisplay({ ...listItem })}>
                      <EditOutlined />
                    </Button>
                    <Button className="binbutton" onClick={() => showDeleteConfirm(listItem.id)}>
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
                <div className="sub-content-des">
                      <p>{listItem.descriptions}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion;


// const Accordioncard = () => {
//     useEffect(() => {
//         const accordionContent = document.querySelectorAll(".accordion-content");
  
//         accordionContent.forEach((item, index) => {
//         let header = item.querySelector("header");
//         header.addEventListener("click", () => {
//           item.classList.toggle("open");
  
//           let description = item.querySelector(".description")
//           if (item.classList.contains("open")) {
//             description.style.height = "50px";
//           } else {
//             description.style.height = "0px";
//           }
//         });
//       });
  
//       // Cleanup event listeners on component unmount
//       return () => {
//         accordionContent.forEach((item) => {
//           let header = item.querySelector("header");
//           header.removeEventListener("click", () => {});
//         });
//       };
//     }, []); // Empty dependency array means this effect runs once on mount
  
//     return (
//         <div className="body">
//         <div className="accordion">
//             <div className="accordion-content">
//                 <header>
//                     <span className="title">
//                         This is a header
//                     </span>
//                     <button type="button" onClick={Accordioncard}>Click me</button>
//                 </header>

//                 <p className="description">
//                     This is the description vsdvsdrvg greber gregvrg grebrethj grbgrfe htehbreg gerdsgbvgrhter gresgvrhte htrrsegber gerhre grehrefv jytjner5hg fwegbrhtyr hedhbgteh gertbehrgh
//                 </p>
//             </div>

//             <div className="accordion-content">
//                 <header>
//                     <span className="title">
//                         This is a header
//                     </span>
//                     <button>Click me</button>
//                 </header>

//                 <p className="description">
//                     This is the description vsdvsdrvg greber gregvrg grebrethj grbgrfe htehbreg gerdsgbvgrhter gresgvrhte htrrsegber gerhre grehrefv jytjner5hg fwegbrhtyr hedhbgteh gertbehrgh
//                 </p>
//             </div>
//         </div>
//     </div>
//     );
// };

// export default Accordioncard;
