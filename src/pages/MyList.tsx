import BookTable from "../components/myList/BookTable";

export default function MyList() {
  //state는 state안에 있던 모든 state이다.
  //payload 파라미터 작성이 가능하다. 파라미터 이름은 action으로도 주로 작명함

  /* let state = useSelector((state) => state);
  let dispatch = useDispatch();*/
  //파일분할하기

  return <BookTable />;
}
