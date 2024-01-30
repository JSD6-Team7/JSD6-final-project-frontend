import Layout from "../Layout.jsx";
import Accordian from "../Tutorial/Accordioncard.jsx";
import "./content-box.css";


function TutorialPage() {

  const data = [
    {
        id: 0,
        label: "What a cool label",
        renderContent: () => (
          <div className="box">
              <iframe src="https://www.youtube.com/embed/zpJXXn_-XuY" width="560" height="315" frameborder="0" allowfullscreen="true"></iframe>
              <div className="sub-box">
                  <label>Descriptions:</label>
                  <div className="content-box">
                      <p>This is a contewnt</p>
                  </div>
              </div>
          </div>
        ),
    },
    {
        id: 1,
        label: "What a cool label",
        renderContent: () => (
            <p>
                <iframe src="https://www.youtube.com/embed/87gWaABqGYs" width="560" height="315" frameborder="0" allowfullscreen="true"></iframe>
            </p>
        ),
    },
    ]

  return (
    <Layout>
          <Accordian items={data} keepOthersOpen={false} />
    </Layout>
  );
}
export default TutorialPage;