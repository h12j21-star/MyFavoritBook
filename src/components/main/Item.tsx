import { BookInfoType } from "../../Type/interface";
import Col from "react-bootstrap/Col";
import imageClean from "../../apis/services/imageClean";
import { BookAuthor, BookImage, BookTitle } from "./style";
import { useNavigate } from "react-router";
interface BookType2 {
  book: BookInfoType;
  a: any;
  id: number;
}
export default function Item(props: BookType2) {
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
        ref={props.id % 12 === 0 ? props.a : null}
      />

      <BookTitle>{props.book.title}</BookTitle>
      <BookAuthor>{authors}</BookAuthor>
    </Col>
  );
}
