import { BookInfoType } from "../../Type/interface";

export default function Item(props: BookInfoType, key: number) {
  return (
    <li key={key}>
      <div>{props.title}</div>
      <div>{props.authors}</div>
      <div>{props.price}원</div>
      <img src={props.thumbnail} alt={props.title} />
    </li>
  );
}
