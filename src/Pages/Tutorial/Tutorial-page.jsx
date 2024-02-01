import Layout from "../Layout.jsx";
import "./TutorialCSS.css";
import Accordian from "../Tutorial/Accordioncard.jsx";

function TutorialPage() {

  const data = [
    {
        id: 0,
        label: "What a cool label",
        video: "https://www.youtube.com/embed/zpJXXn_-XuY",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus, felis eget tincidunt sollicitudin, tortor lacus varius odio, vitae elementum dolor velit ut sapien. Nulla facilisi. Phasellus luctus diam in tortor laoreet, quis laoreet dui sagittis. Fusce in arcu vel ipsum pharetra feugiat non vitae dolor. Suspendisse potenti. Praesent accumsan sagittis massa, vitae commodo erat facilisis et. Morbi mauris risus, semper at imperdiet et, tincidunt eget quam. Praesent commodo eros ut ipsum condimentum, a pulvinar tortor sollicitudin. Mauris ultricies eros neque, in finibus erat consequat laoreet. Nullam ultrices mollis nulla, non dictum ex cursus mattis. Praesent tincidunt sodales tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ultrices tellus vel neque accumsan tempus id quis augue. Donec eu placerat tellus. Sed justo velit, sagittis eu mi elementum, tempor lacinia leo. Suspendisse faucibus augue vitae semper congue. Sed viverra, dui sit amet viverra aliquet, metus ipsum faucibus urna, vel porttitor felis neque vel tortor. Nulla maximus sit amet elit eget posuere. Pellentesque iaculis nisi orci, non dictum justo finibus vitae. Maecenas nisi ipsum, aliquet gravida pellentesque vitae, sodales id purus. Vestibulum imperdiet lorem sit amet urna tempus consectetur. Sed non nibh nisi. Nunc tempor sapien neque, eu malesuada risus condimentum sit amet.",
    },
    {
        id: 1,
        label: "What a cool label",
        video: "https://www.youtube.com/embed/zpJXXn_-XuY",
        descriptions: "",
    },
    ];

  const newData = data.map((item, index) => ({ ...item, index }));


  return (
    <Layout>
          <Accordian items={newData} keepOthersOpen={false} />
    </Layout>
  );
}
export default TutorialPage;