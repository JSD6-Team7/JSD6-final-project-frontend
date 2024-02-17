import React from "react";
import { Rate, Typography } from "antd";


const { Text } = Typography;

const RatingSection = () => {
  return (
    <div className="rating-container">
      <div className="stars-container">
        <Rate value={4.8} disabled allowHalf />
      </div>
      <div className="review-text">
        Rated by 4.8 of 5.0 based on members{" "}
        <Text type="secondary" strong underline>
          1058 reviews! 
        </Text>
      </div>
    </div>
  );
};

export default RatingSection;
