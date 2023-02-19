import { PropsBookType } from "../../Type/interface";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function ItemList(props: PropsBookType) {
  return (
    <>
      <section>
        <h2 className="ir">도서 검색 결과 리스트</h2>
        <Container>
          <Row xs="3">
            {props.book.map((item, i) => (
              <Item book={item} key={i} a={props.a} id={i} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
