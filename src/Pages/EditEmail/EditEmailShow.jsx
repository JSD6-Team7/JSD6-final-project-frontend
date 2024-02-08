import Layout from "../Layout";
import { BulbFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { Typography } from "antd";
import { Flex } from "antd";
import "./EditEmail.css";
import { Button, Form, Input, DatePicker } from "antd";
import React, { useState } from "react";

const EditEmailShow = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div className="card">
        <h2 style={{ marginBottom: 40 }}>Edit Email</h2>
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
            label="Old Email"
            name="oldemail"
            rules={[
              {
                required: true,
                message: "Please input your Old Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="New Email"
            name="newemail"
            rules={[
              {
                required: true,
                message: "Please input your New Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Confirm New Email"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your New Email!",
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

export default EditEmailShow;
