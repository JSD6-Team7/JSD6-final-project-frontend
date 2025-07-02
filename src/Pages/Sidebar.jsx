import { Menu, Button } from "antd";
import {
  FileTextOutlined,
  VideoCameraOutlined,
  LineChartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpg';

const items = [
  { label: "Activity", key: "activityList", icon: <FileTextOutlined /> },
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

  const onSignoutClick = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-appLogo">
        <img
          // src="https://i.ibb.co/0ZMXTgJ/logo-corgifit.png"
          // src="https://i.ibb.co/nqKzJwrv/il-570x-N-4168481284-7sv6.jpg"
          src={logo}
          alt="CorgiFit Logo"
          style={{ height: "240px", paddingTop: "5px", weight: "64px" }}
        />
      </div>
      <div className="sidebar-menu">
        <Menu mode="vertical" items={items} onClick={onMenuClick} />
      </div>
      <Button
        type="text"
        className="sidebar-signOut"
        onClick={onSignoutClick}
        block
      >
        <LogoutOutlined style={{ marginInlineEnd: "16px " }} />
        Sign out
      </Button>
    </div>
  );
}

export default Sidebar;
