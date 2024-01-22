import { Button } from "antd";
import runningPicture from "../../assets/activityTypePictures/running.png";
import swimmingPicture from "../../assets/activityTypePictures/swimming.png";
import yogaPicture from "../../assets/activityTypePictures/yoga.png";
import boxingPicture from "../../assets/activityTypePictures/boxing.png";
import weightTraining from "../../assets/activityTypePictures/weightTraining.png";
import {
  FieldTimeOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";
const activityItems = [
  {
    activityName: "swim",
    description: "Have fun",
    activityType: "swimming",
    hourDuration: 1,
    minuteDuration: 30,
    key: 1,
  },
  {
    activityName: "Run",
    description: "To do a push-up",
    activityType: "running",
    hourDuration: 1,
    minuteDuration: 10,
    key: 2,
  },
];

function ActivityCard() {
  const date = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    return <p className="activityCard-date">{formattedDate}</p>;
  };

  return (
    <div className="activityCard">
      <h2>Welcome</h2>
      <div className="activityCard-line2">
        {date()}
        <Button ghost className="activityCard-addActivityButton">
          + Activity
        </Button>
      </div>
      <div className="activityCard-ListmemuLabel">List Menu</div>
      <div className="activityCard-cards">
        {activityItems.map((item) => {
          return (
            <div className="activityCard-card" key={item.key}>
              <div className="activityCard-card-imageContainer">
                <img className="activityCard-card-image" src={boxingPicture} />
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
                    <Button className="editButton">
                      <EditOutlined />
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
