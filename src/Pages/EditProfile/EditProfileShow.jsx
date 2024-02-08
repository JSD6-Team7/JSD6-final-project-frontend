import Layout from "../Layout";
import { BulbFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { Typography } from "antd";
import { Flex } from "antd";
import "./EditProfile.css";
import { Button, Form, Input, DatePicker, Select } from "antd";
import React, { useState } from "react";
import Img from "../../assets/profile.jpg";

const EditProfileShow = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div className="card">
        <h2 class="mt">Edit Profile</h2>
        <div className="wrapper-edit" style={{ marginLeft: 120 }}>
          <Avatar
            shape="square"
            size={100}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #D9D9D9",
              padding: 6,
            }}
          >
            <img
              src={Img}
              alt="Profile"
              style={{
                marginTop: 8,
                width: "100%",
                height: "100%",
                objectFit: "center",
                // borderRadius: "100%",
              }}
            />
          </Avatar>
          <div className="box">
            <h5 style={{ marginLeft: 50 }}>Profile picture</h5>
            <Button type="dashed" className="btn-image">
              Edit Profile Photo
            </Button>
          </div>
        </div>

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
            marginTop: 50,
          }}
        >
          <Form.Item
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Birthday">
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="Gender"
            rules={[
              {
                required: true,
                message: "Please select your Gender!",
              },
            ]}
          >
            <Select placeholder="Select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
        </Form>
        <Form
          //   form={form}
          name="horizontal_login"
          layout="inline"
          //   onFinish={onFinish}
          style={{ marginLeft: 119 }}
        >
          <Form.Item
            label="Weight"
            name="Weight"
            rules={[
              {
                required: true,
                message: "Please input your Weight!",
              },
            ]}
          >
            <Input suffix="km" />
          </Form.Item>

          <Form.Item
            label="Height"
            name="Height"
            rules={[
              {
                required: true,
                message: "Please input your Height!",
              },
            ]}
          >
            <Input suffix="cm" />
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

export default EditProfileShow;
