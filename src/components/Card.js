import MyPicture from "./MyPicture";
import Title from "./Title";
import Paragraph from "./Paragraph";
function Card(props) {
  return (
    <div>
      <Title
        Title={props.Title}
        Subtitle={props.Subtitle}
        />
      <MyPicture Foto={props.Foto} />
      <Paragraph />
    </div>
  );
}

export default Card;
