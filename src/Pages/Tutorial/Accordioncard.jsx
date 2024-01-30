import React, { useEffect, useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons'
import "./TutorialCSS.css";

const Accordion = ( { items, keepOthersOpen } ) => {

  const [accordionItems, setAccordionItems ] = useState(null)

  useEffect(() => {
    if (items) {
      setAccordionItems([
        ...items.map(item => ({
          ...item,
          toggled: false
        }))
      ])
    }
  }, [items])

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
  }

  return(
    <div className='accordion-parent'>
      {accordionItems?.map((listItem, key) => {
        return (
          <div class={`accordion ${listItem.toggled ? 'toggled' : ''}`} key={key}>
            <button className='toggle' onClick={() => handleAccordionToggle(listItem)}>
              <p>{listItem.label}</p>
              <div className='direcction-indicator'>{listItem.toggled ? '-' : '+'}</div>
            </button>
            <div className='content-parent'>
              <div className='content'>{listItem.renderContent()}</div>
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
