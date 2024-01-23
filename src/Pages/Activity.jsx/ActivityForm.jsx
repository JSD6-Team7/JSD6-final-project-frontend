import {
  Button,
  Flex,
  Form,
  Input,
  DatePicker,
  Select,
  Typography,
  Modal,
} from "antd";

function ActivityForm() {
  const handleSubmit = (value) => {
    const { username, email, password, confirmPassword, phoneNumber } = value;
    if (!username || !email || !password || !confirmPassword || !phoneNumber) {
      return;
    } else {
      //redirect to ActivityPage
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
  };

  return (
    <Flex justify="center" align="center" vertical>
      <Typography.Title level={4}>Activity Form</Typography.Title>
      <Form
        {...formItemLayout}
        name="activityForm"
        onFinish={handleSubmit}
        scrollToFirstError
      >
        <Form.Item labelAlign="left" name="activityName" label="Activity Name">
          <Input placeholder="Enter your Activity Name" />
        </Form.Item>

        <Form.Item labelAlign="left" name="description" label="Description">
          <Input placeholder="Enter your Description" />
        </Form.Item>

        <Form.Item
          labelAlign="left"
          label="Activity Type"
          rules={[
            {
              required: true,
              message: "Please select activity type",
            },
          ]}
        >
          <Select
            align="left"
            placeholder="Select Your Activity Type"
            allowClear
          >
            <Select.Option value="running">running</Select.Option>
            <Select.Option value="swimming">swimming</Select.Option>
            <Select.Option value="yoga">yoga</Select.Option>
            <Select.Option value="badminton">weight training</Select.Option>
            <Select.Option value="bodyWeight">boxing</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          className="duration-label"
          labelAlign="left"
          label="Goal Duration"
        >
          <Form.Item
            className="duration"
            name="hour"
            rules={[{ required: true }]}
          >
            <Input placeholder="Hour" />
          </Form.Item>
          <Form.Item
            className="hourDuration duration"
            name="Minute"
            rules={[{ required: true }]}
          >
            <Input placeholder="Minute" />
          </Form.Item>
        </Form.Item>

        <Form.Item
          labelAlign="left"
          name="date"
          label="Date"
          rules={[{ required: true }]}
        >
          <DatePicker className="date" />
        </Form.Item>
        <div className="button">
          <Button className="cancelButton">Cancel</Button>
          <Button className="addButton" type="primary" htmlType="submit">
            Add Activity
          </Button>
        </div>
      </Form>
    </Flex>
  );
}
export default ActivityForm;
