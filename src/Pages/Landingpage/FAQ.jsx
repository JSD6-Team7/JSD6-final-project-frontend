import React, { useState } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FAQ = () => {
  const [activeKey, setActiveKey] = useState([]); // State to manage open panels

  const faqData = [
    {
      question: "Is CorgiFit only for certain workouts?",
      answer: "No! Track running, strength training, yoga, anything!",
    },
    {
      question: "Is it hard to use?",
      answer: "Not at all! CorgiFit is designed to be simple and easy.",
    },
    {
      question: " Can I only use it at the gym?",
      answer: "No way! Log workouts at home, outdoors, wherever you exercise.",
    },
    {
      question: " I want to lose weight. Can CorgiFit help with that?",
      answer: "While CorgiFit focuses on exercise, it's a vital part of weight loss! Use it alongside [nutrition plan advice- doctor approved, link to diet apps if you integrate, etc.].",
    },
    // ... more FAQ items
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-header" style={{ color: "#45AE3A",textAlign: "center" ,padding: "15px 25px 15px", marginBottom:"20px"}}>Frequently Asked Questions</h1>
      <Collapse activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
        {faqData.map((item, index) => (
          <Panel header={item.question} key={index}>
            <p>{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
