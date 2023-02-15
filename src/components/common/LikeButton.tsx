import { useSelector } from "react-redux";
import { ReactComponent as HeartImg } from "../../assets/image/icon-heart.svg";
import useButton from "../../utils/useButton";
import { BookInfoType } from "../../Type/interface";
import { RootState } from "../store/store";
import { useEffect } from "react";

// 모든 버튼에서 출력이 됨
export default function LikeButton(props: BookInfoType) {
  let { fill, setFill, onClick } = useButton(props);
  let color = fill ? "red" : "white";
  let likeBook = useSelector((state: RootState) => state.book);
  useEffect(() => {
    // console.log(props.title);
    /* likeBook.forEach((item) => {
      //  console.log(item);
      if (item.title === props.title) {
        setFill(true);
        console.log(props.title);
        console.log(fill);
      } else if (item.title !== props.title) {
        setFill(false);
      }
    });*/
  });

  return (
    <>
      <HeartImg fill={color} onClick={onClick} />
    </>
  );
}
