import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { Link } from "react-router-dom";
import Section from "./Section.jpg";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div className="container">
      <div className="container-form">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
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
            <h1>Welcome!</h1>
            <p>Please Enter your detail.</p>
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
          <Form.Item
            name="username"
            label="Username"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="container-item">
        <img src={Section} />
      </div>
    </div>
  );
};

export default Register;
