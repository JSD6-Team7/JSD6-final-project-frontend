import Layout from "../Layout";
import { BulbFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Typography } from 'antd';
import { Button, Flex } from 'antd';
import EditPassShow from "./EditPassShow";
import "./EditPass.css";


const EditPass = () => {

    return (
        <Layout>
            <EditPassShow />
        </Layout>
    )
}

export default EditPass