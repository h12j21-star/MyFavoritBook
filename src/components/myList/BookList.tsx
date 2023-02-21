import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function BookList() {
  let likeBook = useSelector((state: RootState) => state.book);
  console.log(likeBook);
  return <div>내가 좋아요 누른 책 리스트</div>;
}
