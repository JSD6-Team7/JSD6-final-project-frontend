import Layout from "../Layout";
import { BulbFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Typography } from 'antd';
import { Button, Flex } from 'antd';
import EditEmailShow  from "./EditEmailShow";
import "./EditEmail.css";


const EditEmail = () => {

    return (
        <Layout>
            <EditEmailShow  />
        </Layout>
    )
}

export default EditEmail