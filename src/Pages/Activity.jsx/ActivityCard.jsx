import runningImage from "../../assets/activityTypePictures/running.png";
import swimmingImage from "../../assets/activityTypePictures/swimming.png";
import yogaImage from "../../assets/activityTypePictures/yoga.png";
import boxingImage from "../../assets/activityTypePictures/boxing.png";
import bodyWeightImage from "../../assets/activityTypePictures/weightTraining.png";
import { Button, Modal } from "antd";
import {
  FieldTimeOutlined,
  EditOutlined,
  UserOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { useRef, useState, useEffect } from "react";

const date = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  return <p className="activityCard-date">{formattedDate}</p>;
};

const activityImage = {
  running: runningImage,
  swimming: swimmingImage,
  yoga: yogaImage,
  boxing: boxingImage,
  "body weight": bodyWeightImage,
};
const emptyFields = {
  activityName: "",
  description: "",
  activityType: "",
  date: "",
  hourGoal: "",
  minuteGoal: "",
};

function ActivityCard({ activityItems, deleteItem, setFormDisplay }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  const timer = useRef();
  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => setTime((time) => time + 1), 1000);
    }
    return () => clearInterval(timer.current);
  }, [isRunning]);

  const getHours = (time) => Math.floor((time / 60 / 60) % 24);
  const getMinutes = (time) => Math.floor((time / 60) % 60);
  const getSeconds = (time) => Math.floor(time % 60);

  const formatTime = (time) => {
    const hours = getHours(time) < 10 ? "0" + getHours(time) : getHours(time);
    const minutes =
      getMinutes(time) < 10 ? "0" + getMinutes(time) : getMinutes(time);
    const seconds =
      getSeconds(time) < 10 ? "0" + getSeconds(time) : getSeconds(time);
    return hours + ":" + minutes + ":" + seconds;
  };

  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Are you sure to delete this activity?",
      icon: <ExclamationCircleFilled />,
      centered: true,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteItem(id);
      },
    });
  };

  const handleFinish = () => {
    setIsRunning(false);
    setIsFinish(true);
  };

  return (
    <div className="activityCard">
      <h2>Welcome</h2>
      <div className="activityCard-line2">
        {date()}
        <Button
          ghost
          className="activityCard-addActivityButton"
          onClick={() => setFormDisplay({ ...emptyFields })}
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
                  src={activityImage[item.activityType]}
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
                      {formatTime(time)}
                    </div>
                    <Button
                      className="editButton"
                      onClick={() => setFormDisplay({ ...item })}
                    >
                      <EditOutlined />
                    </Button>
                    <Button
                      className="deleteButton"
                      onClick={() => showDeleteConfirm(item.id)}
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
                    {!isRunning && !isFinish && time === 0 && (
                      <Button
                        className="card-startButton card-buttons"
                        type="primary"
                        onClick={() => setIsRunning(true)}
                      >
                        START
                      </Button>
                    )}
                    {!isRunning && !isFinish && time > 0 && (
                      <Button
                        className="card-startButton card-buttons"
                        type="primary"
                        onClick={() => setIsRunning(true)}
                      >
                        RESUME
                      </Button>
                    )}
                    {isRunning && !isFinish && (
                      <Button
                        className="card-finishButton card-buttons"
                        type="primary"
                        onClick={() => setIsRunning(false)}
                      >
                        Stop
                      </Button>
                    )}
                    {!isRunning && !isFinish && time > 0 && (
                      <Button
                        className="card-finishButton card-buttons"
                        type="primary"
                        onClick={handleFinish}
                      >
                        Finish
                      </Button>
                    )}
                    {isFinish && (
                      <h4>
                        Total time : {getHours(time)} Hours {getMinutes(time)}{" "}
                        Minutes {getSeconds(time)} Seconds
                      </h4>
                    )}
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
