import { useEffect, useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { ItemType } from "../../../routes/Router";
import { DataType } from "./ItemList";

export default function Item({ item, setItem }: DataType) {
  let navigate = useNavigate();
  let [pushButton, setPushButton] = useState(2);
  let [button, setButton] = useState(true);
  let AddItem: ItemType[];
  // 버튼 누르면 상품더 가져오게하기
  // 버튼 3번까지만 눌릭하기
  // 버튼 누르면 로딩중입니다 글자 띄우기
  //catch 로딩중 숨기기
  useEffect(() => {
    if (pushButton === 4) {
      setButton(false);
    }
  });
  return (
    <>
      {item.map((data) => {
        return (
          <Col>
            <img
              src={`../../img/${data.image}`}
              alt={data.title}
              style={{ width: "50px", height: "70px" }}
            />
            <h2>{data.title}</h2>
          </Col>
        );
      })}
      {button ? (
        <button
          onClick={() => {
            setPushButton(pushButton + 1);
            console.log(pushButton);
            axios
              .get(`https://codingapple1.github.io/shop/data${pushButton}.json`)
              .then((data) => {
                AddItem = [...item, ...data.data];
                setItem(AddItem);
              });
          }}
        >
          더보기
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
