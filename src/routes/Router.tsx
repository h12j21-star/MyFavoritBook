import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Detail from "../pages/DetailPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<div>없는페이지</div>} />
    </Routes>
  );
}
