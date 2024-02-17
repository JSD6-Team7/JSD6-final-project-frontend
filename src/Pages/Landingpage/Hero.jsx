import React from "react";
import { Layout, Typography, Button } from "antd";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

function Hero() {
  return (
    <Header className="hero-section">
      {" "}
      {/* Apply the CSS class */}
      <Content>
        <div
          style={{ textAlign: "center", padding: "100px 0", color: "white" }}
        >
          <Title level={2} style={{ color: "white", fontSize: "40px" }}>
            Your Fitness, Your Way
          </Title>
          <Paragraph style={{ color: "white", fontSize: "20px" }}>
            The workout tracker that fits your busy life.
          </Paragraph>
          <a href="/signup">
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "#45AE3A" }}
            >
              Start now | Free Access 
            </Button>
          </a>
        </div>
      </Content>
    </Header>
  );
}

export default Hero;
