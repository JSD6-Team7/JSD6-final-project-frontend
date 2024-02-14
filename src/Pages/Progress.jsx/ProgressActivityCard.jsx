import React, { useState, useEffect } from "react";
import "./ProgressActivityCard.css";

function ProgressActivityCard({ index, eachCardItem }) {
  return (
    <div className="progress__cardsFeed">
      <div className="progress__cards">
        <div className="progress__card">
          <div className="progress__card__number">
            <p>{index + 1}</p>
          </div>
          <div className="progress__card__type">
            {eachCardItem.activityType}
          </div>
          <div className="progress__card__time">
            <div className="progress__card__goal">
              Goal:
              <br />
              {eachCardItem.hourGoal} Hour {eachCardItem.minuteGoal} Min
            </div>
            <div className="progress__card__goal">
              Actual:
              <br />
              {Math.floor(eachCardItem.actualTime / 3600)} Hour{" "}
              {Math.floor((eachCardItem.actualTime / 60) % 60)} Min
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressActivityCard;
