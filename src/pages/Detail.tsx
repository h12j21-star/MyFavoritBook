import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Tab from "../components/detail/Tab";
import { ItemType } from "../routes/Router";
import { useSelector, useDispatch } from "react-redux";
import { RootState, addItem } from "../components/store/store";
interface DetailType {
  item: ItemType[];
  setItem: React.Dispatch<React.SetStateAction<ItemType[]>>;
}

export default function Detail({ item, setItem }: DetailType) {
  let [tab, setTab] = useState<number>(0);
  let dispatch = useDispatch();
  let data = useSelector((state: RootState) => {
    return state;
  });
  console.log(data);
  let { id } = useParams() as { id: string };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
              alt="상품사진"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{item[parseInt(id)].title}</h4>
            <p>{item[parseInt(id)].content}</p>
            <p>{item[parseInt(id)].price}원</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(
                  addItem({
                    id: parseInt(id),
                    name: item[parseInt(id)].title,
                    count: 1,
                  })
                );
                console.log(data);
              }}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
      <Tab tab={tab} setTab={setTab} />
    </>
  );
}
