import Layout from "../Layout";
import { BulbFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { Typography } from "antd";
import { Flex } from "antd";
import "./EditEmail.css";
import { Button, Form, Input, DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const EditEmailShow = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = 'http://localhost:3000/users/1';

    axios.get(url)
      .then((response) => {
        setUserData(response.data.user);
        setName(userData.username)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []); // No dependency array to run only once

  const onSubmit = async (values) => {
    console.log('test')
    try {
      setLoading(true); 

      const updatedUserData = {
        id: 1,
        email: email,

     
      };

      const response = await axios.put('http://localhost:3000/users/editemail', updatedUserData);

      message.success('Profile updated successfully!');
     
    } catch (error) {
      console.error('Error updating user data:', error);
      message.error('An error occurred while updating your profile.');
    } finally {
      setLoading(false); 
    }
  };



  if (!userData) {
    return <p>Loading user data...</p>;
  }


  return (
    <>
      <div className="card">
        <h2 style={{ marginBottom: 40 }}>Edit Email</h2>
        <Form
          Form onFinish={onSubmit} loading={loading}
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
            onChange={(e) => setOldEmail(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setConfirmEmail(e.target.value)}
          >
            <Input />
          </Form.Item>
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
              htmlType="submit"
              type="submit"
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
        </Form>


      </div>
    </>
  );
};

export default EditEmailShow;
