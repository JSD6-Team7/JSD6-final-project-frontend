import { Button } from "antd";
import runningImage from "../../assets/activityTypePictures/running.png";
import swimmingImage from "../../assets/activityTypePictures/swimming.png";
import yogaImage from "../../assets/activityTypePictures/yoga.png";
import boxingImage from "../../assets/activityTypePictures/boxing.png";
import bodyWeightImage from "../../assets/activityTypePictures/weightTraining.png";
import {
  FieldTimeOutlined,
  EditOutlined,
  UserOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

function ActivityCard({
  activityItems,
  setIsFormOpen,
  deleteItem,
  setEditedItem,
}) {
  const date = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    return <p className="activityCard-date">{formattedDate}</p>;
  };
  const imageSource = (item) => {
    if (item.activityType === "running") return runningImage;
    if (item.activityType === "swimming") return swimmingImage;
    if (item.activityType === "yoga") return yogaImage;
    if (item.activityType === "boxing") return boxingImage;
    if (item.activityType === "body weight") return bodyWeightImage;
  };

  return (
    <div className="activityCard">
      <h2>Welcome</h2>
      <div className="activityCard-line2">
        {date()}
        <Button
          ghost
          className="activityCard-addActivityButton"
          onClick={() => setIsFormOpen(true)}
        >
          + Activity
        </Button>
      </div>
      <div className="activityCard-ListmemuLabel">List Menu</div>
      <div className="activityCard-cards">
        {activityItems.map((item) => {
          return (
            <div className="activityCard-card" key={item.id}>
              <div className="activityCard-card-imageContainer">
                <img
                  className="activityCard-card-image"
                  src={imageSource(item)}
                />
              </div>
              <div className="activityCard-card-content">
                <div className="activityCard-card-topContent">
                  <div className="activityCard-card-topContent-left">
                    Goal:{item.hourDuration} Hour {item.minuteDuration} Min
                  </div>
                  <div className="activityCard-card-topContent-right">
                    <div className="activityCard-card-topContent-right-timeCounting">
                      <FieldTimeOutlined style={{ width: "16px" }} />
                      60:00
                    </div>
                    <Button
                      className="editButton"
                      onClick={() => setEditedItem(item)}
                    >
                      <EditOutlined />
                    </Button>
                    <Button
                      className="deleteButton"
                      onClick={() => deleteItem(item.id)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
                <div className="activityCard-card-middleContent">
                  {item.activityType}
                </div>
                <div className="activityCard-card-lastContent">
                  <div className="activityCard-card-lastContent-text">
                    <div
                      style={{
                        border: "2px solid #45ae3a",
                        borderRadius: "50%",
                      }}
                    >
                      <UserOutlined
                        style={{
                          color: "#45ae3a",
                          width: "22px",
                          height: "22px",
                        }}
                      />
                    </div>
                    {item.description}
                  </div>
                  <div className="activityCard-card-lastContent-buttons">
                    <Button
                      className="card-startButton card-buttons"
                      type="primary"
                    >
                      START
                    </Button>
                    <Button
                      className="card-finishButton card-buttons"
                      type="primary"
                    >
                      Finish
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityCard;
