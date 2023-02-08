import { BookInfoType } from "../../Type/interface";
import Col from "react-bootstrap/Col";
import imageClean from "../../apis/services/imageClean";
export default function Item(props: BookInfoType, key: number) {
  return (
    <Col key={key}>
      {props.thumbnail ? (
        <img src={props.thumbnail} alt={props.title} />
      ) : (
        <img
          style={{ width: "120px", height: "174px" }}
          src={imageClean(props.thumbnail)}
          alt={props.title}
        />
      )}

      <div>{props.title}</div>
      <div>{props.authors}</div>
    </Col>
  );
}
