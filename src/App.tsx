import "./App.css";

import NavBar from "./components/common/NavBar";
import Router from "./routes/Router";

export default function App() {
  // 서버에 데이터 요청
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}
