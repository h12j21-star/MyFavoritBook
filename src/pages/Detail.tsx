import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import JustifiedExample from "../components/detail/tab";
import { ItemType } from "../routes/Router";

interface DetailType {
  item: ItemType[];
  setItem: React.Dispatch<React.SetStateAction<ItemType[]>>;
}
function TimeC() {
  return <div>2초이내 구매시 할인</div>;
}
export default function Detail({ item, setItem }: DetailType) {
  let [loading, setLoading] = useState<boolean>(false);
  let [tab, setTab] = useState<number>(0);
  useEffect(() => {
    //mount,update시 여기 코드가 실행된다.
    //언제 사용?
    //html렌더링 이후에 동작함
    // 10000까지 반복문을 돌렸을때
    // html이 동작이후에 돌리니까 html을 먼저보여줘서 빠른 느낌을 주고 효율적이다.
    // 시간이 많이 걸리는 어려운 연산
    // 서버에서데이터가져오는 작업
    // 타이머 장착하는 것
    // useEffect실행조건 dependency
    // return()=>{코드 useEffect동작}
    //기존코드 지우는 것
    // return()=>{clearTimeout(a)} 기존 데이터요청은 제거해주세요 unmount시에만 실행
    let a = setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  let { id } = useParams() as { id: string };
  return (
    <>
      <div className="container">
        {!loading ? <TimeC /> : null}
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
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
      <JustifiedExample tab={tab} setTab={setTab} />
    </>
  );
}
