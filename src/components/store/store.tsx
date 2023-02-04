import {
  configureStore,
  createSlice,
  createStore,
  PayloadAction,
} from "@reduxjs/toolkit";
import data from "../../data";

//redux store에 state 보관하는 법
//useState와 비슷한 용도 createSlice에서 state를 생성한다.
//state하나를 slice라고 한다.
// reducer을 사용하여 state를 등록한다.
//state 변경방법
// state수정해주는 함수를 만든다.
// 원할때 함수를 실행해달라고 store.js에 요청함
//staterk array/obj인녁우 user.satate.이렇게 쓰기
// state.name='park'이렇게 직접 수정해도 state가 변경된다. => immer.js도움으로 자동으로 복사를 해준다.
let title: string[] = data.map((item) => {
  return item.title;
});
let user = createSlice({
  name: "user",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action: PayloadAction<number>) {
      let num = state.findIndex((data) => {
        return data.id === action.payload;
      });
      state[action.payload].count++;
    },
  },
});

// export 하려면 하수를 밖으로 꺼내야한다.
// state, 변경함수가 남음

// 사용할 파일에 import를 사용한다.
// changeName
// useDispatch()를 변수에 저장한다.
// sotre.js에게 요청을 보내주는 함수이다.
// dispatch(changeName())을 사용한다.
// 수정함수를 sotre에 한번에 작성하면 버그 추적이 쉽다.
// array,object

let store = configureStore({
  reducer: {
    user: user.reducer,
  },
});
export default store;
export let { addCount } = user.actions;
export type RootState = ReturnType<typeof store.getState>;
