import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { addCount, delCount, RootState } from "../store/store";
export default function BookTable() {
  let dispatch = useDispatch();
  let data = useSelector((state: RootState) => {
    return state;
  });
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <button
              onClick={() => {
                dispatch(delCount(0));
              }}
            >
              -
            </button>
            <span>{data.cart[0].count}개</span>
            <button
              onClick={() => {
                dispatch(addCount(0));
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>
            <button
              onClick={() => {
                dispatch(delCount(1));
              }}
            >
              -
            </button>
            <span>{data.cart[1].count}개</span>
            <button
              onClick={() => {
                dispatch(addCount(1));
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}
