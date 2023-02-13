import { BookInfoType } from "../../Type/interface";
import Col from "react-bootstrap/Col";
import imageClean from "../../apis/services/imageClean";
import { BookAuthor, BookImage, BookTitle } from "./style";
import { useNavigate } from "react-router";
export default function Item(props: BookInfoType, key: number) {
  let navigate = useNavigate();
  let authors = props.authors.join(" ");
  return (
    <Col key={key}>
      {props.thumbnail ? (
        <BookImage
          src={props.thumbnail}
          alt={props.title}
          onClick={() => {
            navigate(`/detail/${props.isbn}`, { state: props });
          }}
        />
      ) : (
        <BookImage
          style={{ width: "120px", height: "174px" }}
          src={imageClean(props.thumbnail)}
          alt={props.title}
        />
      )}
      <BookTitle>{props.title}</BookTitle>
      <BookAuthor>{authors}</BookAuthor>
    </Col>
  );
}
