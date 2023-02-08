import { PropsBookType } from "../../Type/interface";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
export default function ItemList({ book }: PropsBookType) {
  return (
    <Container>
      <Row xs="3">
        {book.map((item, i) => (
          <Item {...item} key={i} />
        ))}
      </Row>
    </Container>
  );
}
