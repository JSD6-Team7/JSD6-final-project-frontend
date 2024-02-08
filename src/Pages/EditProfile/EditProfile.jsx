import Layout from "../Layout";
import { BulbFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Typography } from 'antd';
import { Button, Flex } from 'antd';
import EditProfileShow from "./EditProfileShow";
import "./EditProfile.css";


const EditProfile = () => {

    return (
        <Layout>
            <EditProfileShow />
        </Layout>
    )
}

export default EditProfile