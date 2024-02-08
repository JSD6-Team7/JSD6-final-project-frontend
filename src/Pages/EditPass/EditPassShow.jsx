import Layout from "../Layout";
import { BulbFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { Typography } from "antd";
import { Flex } from "antd";
import "./EditPass.css";
import { Button, Form, Input, DatePicker } from "antd";
import React, { useState } from "react";

const EditPassShow = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div className="card">
        <h2 style={{ marginBottom: 40 }}>Edit Password</h2>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 1600,
          }}
        >
          <Form.Item
            label="Old Password"
            name="oldpassword"
            rules={[
              {
                required: true,
                message: "Please input your old password!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="newpassword"
            rules={[
              {
                required: true,
                message: "Please input your New Password!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: "Please input your New Password!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>

        <div className="button-save">
          <Button
            href="/profile"
            style={{
              width: "300px",
              height: "32px",
              fontSize: "16px",
              marginRight: "24px",
            }}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            style={{
              width: "300px",
              height: "32px",
              fontSize: "16px",
              backgroundColor: "#D9D9D9",
              color: "#000000",
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditPassShow;
