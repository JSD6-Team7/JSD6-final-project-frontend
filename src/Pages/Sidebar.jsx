import { Menu, Button } from "antd";
import {
  FileTextOutlined,
  VideoCameraOutlined,
  LineChartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "Activity", key: "", icon: <FileTextOutlined /> },
  {
    label: "Video Tutorial",
    key: "videoTutorial",
    icon: <VideoCameraOutlined />,
  },
  {
    label: "Progress",
    key: "progress",
    icon: <LineChartOutlined />,
  },
  {
    label: "Profile",
    key: "profile",
    icon: <UserOutlined />,
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-appLogo">
        <p>logo picture</p>
        <p>Exercise</p>
      </div>
      <div className="sidebar-menu">
        <Menu mode="vertical" items={items} onClick={onMenuClick} />
      </div>
      <Button type="text" className="sidebar-signOut" block>
        <LogoutOutlined style={{ marginInlineEnd: "16px " }} />
        Sign out
      </Button>
    </div>
  );
}

export default Sidebar;
