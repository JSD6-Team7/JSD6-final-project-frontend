import { Menu } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "Activity", key: "activity", icon: <HomeFilled /> },
  { label: "Video Tutorial", key: "videoTutorial", icon: <HomeFilled /> },
  { label: "Progress", key: "progress", icon: <HomeFilled /> },
  { label: "Profile", key: "profile", icon: <HomeFilled /> },
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
        <Menu onClick={onMenuClick} mode="vertical" items={items} />
      </div>
      <div className="sidebar-signOut"></div>
    </div>
  );
}

export default Sidebar;
