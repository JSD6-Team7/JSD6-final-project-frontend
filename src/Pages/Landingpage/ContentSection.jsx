import React from "react";
import { Row, Col, Typography, Button } from "antd";
const { Title, Paragraph } = Typography;
import logo from '../../assets/logo.jpg';

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
                CorgiFit: Your Workout Sidekick
              </Title>

              <div className="blockquote">
                <Paragraph>
                  <p>
                    Transform your fitness routine with CorgiFit!
                    <br></br>Track any workout smash your goals, and see the
                    results you want.Stay accountable, get motivated, and enjoy
                    the journey to a healthier you<br></br> - with your Corgi by
                    your side.
                  </p>
                </Paragraph>
              </div>

              <a href="/signup">
                <Button
                  type="primary"
                  size="large"
                  style={{ backgroundColor: "#45AE3A" }}
                >
                  Join Now
                </Button>
              </a>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="image-container">
              <img
                // src="https://i.ibb.co/LzDFWBL/Img54.png"
                src={logo}
                alt="fitness"
                style={{
                  width: "100%",
                  maxWidth: "300px",
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
