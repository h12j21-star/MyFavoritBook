import { PropsBookType } from "../../Type/interface";
import Item from "./Item";

export default function ItemList({ book }: PropsBookType) {
  return (
    <ul>
      {book.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </ul>
  );
}
