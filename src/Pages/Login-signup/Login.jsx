import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Section from "./Section.jpg";
import "./index.css";
import FormItem from "antd/es/form/FormItem";
import {useNavigate} from 'react-router-dom';

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  //const navigate = useNavigate();
  //const submitHandler = () => {
    //navigate('/');
  //};
  return (
  <div class="container">
    <div className="container-form">
      <Form
        scrollToFirstError
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={FormData}
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
          <Link to="/login" style={{ flex: "1 1 0", margin: "32px" }}>
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

        <div className="container-item-1">
          <Form.Item
            labelAlign="left"
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
            labelAlign="left"
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
            labelAlign="left"
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
    <div className="container-item">
      <img src={Section} />
    </div>
  </div>
);
          }
export default Login;
   