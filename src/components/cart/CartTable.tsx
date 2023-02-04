import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { addCount, RootState } from "../store/store";
export default function CartTable() {
  let dispatch = useDispatch();
  let data = useSelector((state: RootState) => {
    return state;
  });
  console.log(data.user);
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
            <button>-</button>
            <span>{data.user[0].count}</span>
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
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
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
