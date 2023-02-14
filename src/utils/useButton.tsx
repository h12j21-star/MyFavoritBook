import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { offHeart, onHeart, RootState } from "../components/store/store";
import { BookInfoType } from "../Type/interface";

export default function useButton(props: BookInfoType) {
  let [fill, setFill] = useState("white");
  let dispatch = useDispatch();
  let likeBook = useSelector((state: RootState) => state.book);
  const heartHandler = () => {
    dispatch(onHeart({ id: props.isbn, title: props.title }));
    console.log(likeBook);
  };
  const heartOffHandler = () => {
    dispatch(offHeart({ id: props.isbn, title: props.title }));
  };
  const colorHandler = () => {
    if (fill === "white") {
      setFill("red");
    } else {
      setFill("white");
    }
  };
  let onClick = (e: React.MouseEvent<SVGSVGElement>) => {
    colorHandler();
    if (fill === "white") {
      heartHandler();
    } else if (fill === "red") {
      heartOffHandler();
    }
  };
  return { fill, onClick };
}
