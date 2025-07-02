import React from "react";
import { Card } from "antd";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="minimal-card" style={{ marginTop: 20, height: 290}}>
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default FeatureCard;
