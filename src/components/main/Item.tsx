import { BookRefType } from "../../Type/interface";
import Col from "react-bootstrap/Col";
import imageClean from "../../apis/services/imageClean";
import { BookAuthor, BookImage, BookTitle } from "./style";
import { useNavigate } from "react-router";
import LikeButton from "../common/LikeButton";

export default function Item(props: BookRefType) {
  let navigate = useNavigate();
  let authors =
    props.book.authors.length > 0 ? props.book.authors.join(" ") : "저자 미상";
  console.log(props.id);
  return (
    <Col key={props.id}>
      <BookImage
        src={
          props.book.thumbnail
            ? props.book.thumbnail
            : imageClean(props.book.thumbnail)
        }
        alt={props.book.title}
        onClick={() => {
          navigate(`/detail/${props.book.isbn}`, { state: props.book });
        }}
        ref={
          props.id % 11 === 0
            ? (i) => {
                props.imgRef(i);
              }
            : null
        }
      />

      <BookTitle>{props.book.title}</BookTitle>
      <BookAuthor>{authors}</BookAuthor>
      <LikeButton {...props.book} />
    </Col>
  );
}
