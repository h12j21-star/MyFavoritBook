import { PropsBookType } from "../../Type/interface";
import Item from "./Item";

export default function ItemList({ book }: PropsBookType) {
  return (
    <ul>
      {book.length > 0 ? (
        book.map((item, i) => <Item {...item} key={i} />)
      ) : (
        <li>검색결과가 없습니다😥</li>
      )}
    </ul>
  );
}
