import React from "react";
import { Row, Col, Typography, Button } from "antd";
const { Title, Paragraph } = Typography;

const AboutUsSection = () => {
  return (
    <section id="about-us" style={{ marginTop: 15 }}>
      <div className="cont-container">
        <Row justify="center" align="middle">
          {" "}
          {/* Center the Row's content */}
          <Col xs={24} lg={12}>
            <div className="text-content">
              <Title level={2} style={{ color: "#45AE3A" }}>
                The Workout App That Works for You
              </Title>

              <div className="blockquote">
                <Paragraph>
                  <p>
                    Your all-in-one fitness companion. Track any workout, from
                    running to yoga, and <br></br> visualize your progress with detailed
                    stats. Set achievable goals, receive personalized workout
                    suggestions, and get motivated by your Corgi cheerleader!
                  </p>
                </Paragraph>
              </div>

              <a href="/signup"><Button
                type="primary"
                size="large"
                style={{ backgroundColor: "#45AE3A" }}
              >
                Start Your Training Today
              </Button></a>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="image-container">
              <img
                src="https://i.ibb.co/Ss3XDc1/Gemini-Generated-Image.jpg"
                alt="fitness"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "8px",
                  pointerEvents: "none",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutUsSection;
