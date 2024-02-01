import React, { useState, useEffect } from 'react';
import ProgressDonutChartJs from './ProgressDonutChartJs';
import { Button } from "antd";
import "./ProgressActivityCard.css";

const activityItems = [
    {
      activityName: "swim",
      description: "Have fun",
      activityType: "swimming",
      hourDuration: 1,
      minuteDuration: 30,
      key: 1,
    },
    {
      activityName: "Run",
      description: "To do a push-up",
      activityType: "running",
      hourDuration: 1,
      minuteDuration: 10,
      key: 2,
    },
  ];

function ProgressActivityCard() {
    return (
        <div className='card'>
            Activity feed
            <div className="activityCard-cards">
        {activityItems.map((item) => {
          return (
            <div className="activityCard-card" key={item.key}>
              <div className="activityCard-card-imageContainer">
               <p>{item.key}</p>
              </div>
              <div className="activityCard-card-content">
                <div className="activityCard-card-topContent">
                  {/* <div className="activityCard-card-topContent-left">
                    Goal:{item.hourDuration} Hour {item.minuteDuration} Min
                  </div> */}
                  <div className="activityCard-card-topContent-right">
                  </div>
                </div>
                <div className="activityCard-card-middleContent">
                  {item.activityType}
                </div>
                <div className="activityCard-card-lastContent">
                  {/* <div className="activityCard-card-lastContent-text">
                    <div
                      style={{
                        border: "2px solid #45ae3a",
                        borderRadius: "50%",
                      }}
                    >
                    
                    </div>
                    {item.description}
                  </div> */}
                 
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