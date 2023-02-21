import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Detail from "../pages/DetailPage";
import Cart from "../pages/MyListPa";
import { Suspense } from "react";
import Skeleton from "../components/main/Skeleton";

//1. context를 하나 만듦 state보관함
//2. 공유를 원하는 것을 하나로 감싼다.
// context.provider value=={{재고}}
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<div>없는페이지</div>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
