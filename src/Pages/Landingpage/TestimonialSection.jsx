import React from "react";
import { Row, Col, Typography, Card, Avatar } from "antd";

const { Title, Paragraph, Text } = Typography;

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "CorgiFit has been my missing piece! I used to try workout programs and then fall off after a few weeks. But tracking my workouts  and seeing my progress keeps me going. This app makes fitness feel achievable",
      name: "Emily R.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      quote:
        "Honestly, I was skeptical about workout apps. But CorgiFit isn't just logging exercises – it's my go-to when I need workout inspiration.  Their workout videos have transformed my home gym routine, and I love finding new things to try.",
      name: "Ben S.",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      quote:
        "As a mom of two, making time for myself is tough. CorgiFit fits into my crazy schedule!  I love that I can track a quick workout during naptime or find something longer when I have the chance. No more excuses!",
      name: "Katie B.",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    // ... Other testimonials
  ];

  return (
    <div
      style={{ marginTop: 15 }}
      className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5"
    >
      <div
        className="container"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/background-gradient-green-tones_23-2148360340.jpg")' /* Proper quotes around URL */,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          padding: "50px",
          backgroundColor: "#45AE3A",
          display: "flex", // Enable flexbox layout
          flexDirection: "column", // Arrange items in a column
          alignItems: "center", // Center items horizontally
        }}
      >
        {" "}
        {/* Use a container for spacing */}
        <Row justify="center">
          <Col span={20}>
            {" "}
            {/* Adjust column span as needed */}
            <Title
              level={2}
              className="text-center mb-8"
              style={{ color: "white", textAlign: "center", marginTop: 10 }}
            >
              What People Are Saying
            </Title>
            <Row style={{ marginTop: 50 }} gutter={30}>
              {" "}
              {/* Space out testimonials */}
              {testimonials.map((testimonial, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Card className="testimonial-card">
                    <Avatar size={64} src={testimonial.avatar} />
                    <Paragraph className="quote">
                      <Text strong>{testimonial.quote}</Text>
                    </Paragraph>
                    <div className="testi-author">
                      <Title level={5}>{testimonial.name}</Title>
                      <Text>{testimonial.title}</Text>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TestimonialSection;
