import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { offHeart, onHeart, RootState } from "../components/store/store";
import { BookInfoType } from "../Type/interface";

export default function useButton(props: BookInfoType) {
  let [fill, setFill] = useState(false);
  let dispatch = useDispatch();
  let likeBook = useSelector((state: RootState) => state.book);
  const heartHandler = () => {
    dispatch(onHeart({ id: props.isbn, title: props.title }));
  };
  const heartOffHandler = () => {
    dispatch(offHeart({ id: props.isbn, title: props.title }));
  };
  //console.log(likeBook);
  let onClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!fill) {
      heartHandler();
      setFill(true);
    } else if (fill) {
      heartOffHandler();
      setFill(false);
    }
  };
  return { fill, setFill, onClick };
}
// fill은
