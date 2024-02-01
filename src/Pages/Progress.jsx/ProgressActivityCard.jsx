import React, { useState, useEffect } from "react";
import "./ProgressActivityCard.css";
import { v4 as uuid } from "uuid";

const activityItems = [
  {
    activityName: "swim",
    description: "Have fun",
    activityType: "swimming",
    hourDuration: 1,
    minuteDuration: 0,
    actualTime: 1800,
    id: uuid(),
  },
  {
    activityName: "Run",
    description: "To do a push-up",
    activityType: "running",
    hourDuration: 1,
    minuteDuration: 10,
    actualTime: 3600,
    id: uuid(),
  },
  {
    activityName: "swim",
    description: "Have fun",
    activityType: "Yoga",
    date: "",
    hourGoal: 1,
    minuteGoal: 30,
    actualTime: 5400,
    id: uuid(),
  },
];

function ProgressActivityCard() {
  return (
    <div className="progress__cardsFeed">
    
      <div className="progress__cards">
        {activityItems.map((item, index) => {
          return (
            <div className="progress__card" key={index + 1}>
              <div className="progress__card__number">
                <p>{index + 1}</p>
              </div>
              <div className="progress__card__type">
                {item.activityType}
              </div>
              <div className="progress__card__time">
              <div className="progress__card__goal">
                Goal:<br />
                {item.hourDuration} Hour {item.minuteDuration} Min
              </div>
              <div className="progress__card__goal">
                Actual:<br />
                {Math.floor(item.actualTime/ 3600)} Hour {Math.floor((item.actualTime / 60) % 60)} Min
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressActivityCard;
