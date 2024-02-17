import React from "react";
import { Row, Col, Typography } from "antd";
import FeatureCard from "./FeatureCard";
const { Title, Paragraph } = Typography;

const FeatureSection = () => {
  const featureData = [
    {
      icon: <img src="https://i.ibb.co/gFDbmhZ/Dw2.png" alt="Weightlifting" />,
      title: "Track Smarter, Reach Goals Faster",
      description: "",
    },
    {
      icon: <img src="https://i.ibb.co/HCkpMqM/sda.png" alt="Weightlifting" />,
      title: "Set goals and track your progress",
      description: "",
    },
    {
      icon: (
        <img src="https://i.ibb.co/wMxQNdh/Plans.png" alt="Weightlifting" />
      ),
      title: "Plan your workouts",
      description: "",
    },
    {
      icon: <img src="https://i.ibb.co/8rzXLbv/AES.png" alt="Weightlifting" />,
      title: " Find workout videos to follow along",
      description: "",
    },
    // ... add more features here
  ];

  return (
    <section id="our-classes" style={{ marginTop: 60 }}>
      <div className="fea-container">
        <Title
          level={2}
          style={{ textAlign: "center", marginTop: 15, color: "#45AE3A" }}
        >
          OUR FEATURES
        </Title>

        <Row gutter={30} justify="center">
          {featureData.map((feature, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <FeatureCard {...feature} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FeatureSection;
