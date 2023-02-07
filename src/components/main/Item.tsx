import { BookInfoType, BookProps, BookType } from "../../Type/interface";

export default function Item(props: BookInfoType) {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.authors}</div>
      <div>{props.price}원</div>
      <img src={props.thumbnail} alt={props.title} />
    </>
  );
}
