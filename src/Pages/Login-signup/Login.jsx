import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Section from "./Section.jpg";
import "./index.css";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => (
  <div class="container">
    <div className="container-form">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: "black",
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: "30",
            lineHeight: 3,
            wordWrap: "break-word",
          }}
        >
          <h1>Welcome Back</h1>
          <p>Please enter your details.</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 16,
            display: "inline-flex",
          }}
        >
          <Link to="/" style={{ flex: "1 1 0", margin: "32px" }}>
            <div
              style={{
                flex: "1 1 0",
                height: 29,
                paddingTop: 4,
                paddingBottom: 4,
                borderBottom: "2px #45AE3A solid",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "#45AE3A",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: 21,
                  wordWrap: "break-word",
                }}
              >
                Login
              </div>
            </div>
          </Link>
          <Link to="/Register" style={{ flex: "1 1 0", margin: "32px" }}>
            <div
              style={{
                flex: "1 1 0",
                height: 29,
                paddingTop: 4,
                paddingBottom: 4,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "#050505",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: 21,
                  wordWrap: "break-word",
                }}
              >
                Sign Up
              </div>
            </div>
          </Link>
        </div>

        <div class="container-item-1">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
    <div class="container-item">
      <img src={Section} />
    </div>
  </div>
);

export default Login;
