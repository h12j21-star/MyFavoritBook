import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import data from "../data";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import MyList from "../pages/MyList";

export interface ItemType {
  id: number;
  title: string;
  content: string;
  price: number;
  image?: string;
}
//1. context를 하나 만듦 state보관함
//2. 공유를 원하는 것을 하나로 감싼다.
// context.provider value=={{재고}}
export default function Router() {
  let [item, setItem] = useState<ItemType[]>(data);
  return (
    <Routes>
      <Route path="/" element={<Main item={item} setItem={setItem} />} />
      <Route
        path="/detail/:id"
        element={<Detail item={item} setItem={setItem} />}
      />
      <Route path="/cart" element={<MyList />} />
      <Route path="*" element={<div>없는페이지</div>} />
    </Routes>
  );
}
