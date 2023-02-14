import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

//redux store에 state 보관하는 법
//useState와 비슷한 용도 createSlice에서 state를 생성한다.
//state하나를 slice라고 한다.
// reducer을 사용하여 state를 등록한다.
//state 변경방법
// state수정해주는 함수를 만든다.
// 원할때 함수를 실행해달라고 store.js에 요청함
//staterk array/obj인녁우 user.satate.이렇게 쓰기
// state.name='park'이렇게 직접 수정해도 state가 변경된다. => immer.js도움으로 자동으로 복사를 해준다.
type ActionType = {
  id: string;
  title: string;
};
type InitialState = {
  id: string;
  title: string;
  heart: boolean;
};
//@reduxjs-toolkit 내부의 immer 패키지가 이러한 직접적 상태 변경으로 보이는 코드를 확인하면 자동으로 기존 상태를 복제한 다음 새로운 상태 객체를 생성하며 모든 상태를 변경할 수 없게 유지한다. 불변성을 고려 하지 않아도된다.
const initialState: InitialState[] = [];
let book = createSlice({
  name: "book",
  initialState,
  reducers: {
    onHeart(state, action: PayloadAction<ActionType>) {
      let exist = state.map((item) => item.title === action.payload.title);
      state.push({
        title: action.payload.title,
        id: action.payload.id,
        heart: true,
      });

      // state[action.payload.id]["title"] = action.payload.title;
      // state[action.payload.id]["heart"] = false;
    },
    offHeart(state, action: PayloadAction<ActionType>) {
      let arr = state.filter((item) => item.id !== action.payload.id);
      return arr;
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
    book: book.reducer,
  },
});
export default store;
export let { offHeart, onHeart } = book.actions;
export type RootState = ReturnType<typeof store.getState>;
