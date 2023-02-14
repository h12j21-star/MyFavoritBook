import { ReactComponent as HeartImg } from "../../assets/image/icon-heart.svg";
import useButton from "../../utils/useButton";
import { BookInfoType } from "../../Type/interface";

export default function LikeButton(props: BookInfoType) {
  //let isbn = props.isbn.split(" ")[1];
  // let color = likeBook[isbn] ? "red" : "white";
  let { fill, onClick } = useButton(props);
  return (
    <>
      <HeartImg data-set="index" fill={fill} onClick={onClick} />
    </>
  );
}
