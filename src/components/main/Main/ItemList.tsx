import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Items from "./Items";
import { ItemType } from "../../../routes/Router";
export interface DataType {
  item: ItemType[];
  setItem: React.Dispatch<React.SetStateAction<ItemType[]>>;
}
export default function ItemList({ item, setItem }: DataType) {
  return (
    <Container>
      <Row xs="3">
        <Items item={item} setItem={setItem} />
      </Row>
    </Container>
  );
}
