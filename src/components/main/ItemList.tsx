import { PropsBookType } from "../../Type/interface";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function ItemList({ book }: PropsBookType) {
  let likeBook = useSelector((state: RootState) => state.book);
  let arr: string[] = [];
  book.forEach((item) => arr.push(item.title));
  let likeBookTitle: string[] = [];
  likeBook.forEach((item) => likeBookTitle.push(item.title));
  console.log(likeBookTitle);
  console.log(arr);
  let heartIdx: boolean[] = Array(book.length).fill(false);
  heartIdx = arr.map((item) => likeBookTitle.includes(item));
  console.log(heartIdx);
  return (
    <section>
      <h2 className="ir">도서 검색 결과 리스트</h2>
      <Container>
        <Row xs="3">
          {book.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
