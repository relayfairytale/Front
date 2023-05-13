import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값
const initialState = {
  // key: value,
};

const fairyTaleSlice = createSlice({
  name: "fairyTale",
  initialState: {},
  reducers: {
    // 액션명: (state, action) => {
    //   state.number = state.number + action.payload;
    //   수행할 명령
    // },
    // 액션명2: (state, action) => {
    //   state.number = state.number - action.payload;
    //   수행할 명령
    // },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { /* addNumber, minusNumber */ } = fairyTaleSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default fairyTaleSlice.reducer;
