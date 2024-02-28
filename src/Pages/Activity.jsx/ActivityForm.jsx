import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Typography,
  Modal,
} from "antd";

const { Option } = Select;

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
const activityType = [
  { key: 1, type: "running" },
  { key: 2, type: "swimming" },
  { key: 3, type: "yoga" },
  { key: 4, type: "boxing" },
  { key: 5, type: "body weight" },
];

function ActivityForm({
  isFormOpen,
  setIsFormOpen,
  createItem,
  updateItem,
  formDisplay,
  setFormDisplay,
}) {
  const handleCancleButton = () => {
    setIsFormOpen(false);
  };
  const handleSubmitForm = (value) => {
    console.log(value);
    if (formDisplay?._id) {
      updateItem({ ...value, _id: formDisplay._id });
      setFormDisplay(null);
    } else {
      createItem(value);
    }
    setIsFormOpen(false);
  };
  const submitButtonText = formDisplay?._id ? "Edit Activity" : "Add Activity";

  return (
    <div>
      <Modal
        open={isFormOpen}
        closeIcon={null}
        footer={null}
        centered
        width={600}
        destroyOnClose={true}
      >
        <Flex justify="center" align="center" vertical>
          <Typography.Title level={4}>Activity Form</Typography.Title>
          <Form
            {...formItemLayout}
            scrollToFirstError
            onFinish={handleSubmitForm}
            autoComplete="off"
            initialValues={formDisplay}
          >
            <Form.Item
              labelAlign="left"
              label="Activity Name"
              name="activityName"
            >
              <Input placeholder="Enter your Activity Name" id="activityName" />
            </Form.Item>

            <Form.Item labelAlign="left" label="Description" name="description">
              <Input placeholder="Enter your Description" id="description" />
            </Form.Item>
            <Form.Item
              name="activityType"
              labelAlign="left"
              label="Activity Type"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                align="left"
                placeholder="Select Your Activity Type"
                id="activityType"
                allowClear
              >
                {activityType.map((each) => {
                  return (
                    <Option key={each.key} value={each.type}>
                      {each.type}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              className="duration-label"
              labelAlign="left"
              label="Goal Duration"
            >
              <Form.Item
                className="duration"
                name="hourGoal"
                label="Hour"
                rules={[{ required: true, type: "number", min: 0, max: 23 }]}
              >
                <InputNumber
                  className="duration-Input"
                  placeholder="Hour"
                  id="hourGoal"
                />
              </Form.Item>
              <Form.Item
                className="duration"
                name="minuteGoal"
                label="Minute"
                rules={[{ required: true, type: "number", min: 0, max: 59 }]}
              >
                <InputNumber
                  className="duration-Input"
                  placeholder="Minute"
                  id="minuteGoal"
                />
              </Form.Item>
            </Form.Item>

            <Form.Item
              labelAlign="left"
              name="date"
              label="Date"
              rules={[{ required: true }]}
            >
              <DatePicker className="date" id="date" />
            </Form.Item>
            <div className="button">
              <Button className="cancelButton" onClick={handleCancleButton}>
                Cancel
              </Button>
              <Button className="addButton" type="primary" htmlType="submit">
                {submitButtonText}
              </Button>
            </div>
          </Form>
        </Flex>
      </Modal>
    </div>
  );
}
export default ActivityForm;
