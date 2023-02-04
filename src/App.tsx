import { Provider } from "react-redux";
import "./App.css";

import NavBar from "./components/common/NavBar";
import store from "./components/store/store";
import Router from "./routes/Router";

export default function App() {
  // 서버에 데이터 요청
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Router />
      </div>
    </Provider>
  );
}
