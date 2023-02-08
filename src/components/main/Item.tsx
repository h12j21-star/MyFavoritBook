import { BookInfoType } from "../../Type/interface";
import Col from "react-bootstrap/Col";

export default function Item(props: BookInfoType, key: number) {
  return (
    <Col key={key}>
      <img src={props.thumbnail} alt={props.title} />
      <div>{props.title}</div>
      <div>{props.authors}</div>
    </Col>
  );
}
