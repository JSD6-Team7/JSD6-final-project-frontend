import {
    Button,
    Flex,
    Form,
    Input,
    Typography,
    Modal,
} from "antd";

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

function Addvideo({
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
        console.log(formDisplay);
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
                    <Typography.Title level={4}>Add Video</Typography.Title>
                    <Form
                        {...formItemLayout}
                        scrollToFirstError
                        onFinish={handleSubmitForm}
                        autoComplete="off"
                        initialValues={formDisplay}
                    >
                        <Form.Item
                            labelAlign="left"
                            label="Video"
                            name="video"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Place Youtube url here" id="video" />
                        </Form.Item>
                        <Form.Item
                            labelAlign="left"
                            label="Title"
                            name="label"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Enter the video title" id="label" />
                        </Form.Item>

                        <Form.Item labelAlign="left" label="Description" name="descriptions">
                            <Input placeholder="Enter your Description" id="descriptions" />
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
export default Addvideo;
