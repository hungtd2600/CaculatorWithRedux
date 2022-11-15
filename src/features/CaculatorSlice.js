import { createSlice, nanoid } from "@reduxjs/toolkit";

const caculSlice = createSlice({
  name: "cacul",
  initialState: {
    historyCacul: [],
    question: "",
    result: "",
  },
  reducers: {
    deleteCacul(state) {
      let str = state.question;
      str = str.substring(0, str.length - 1);
      state.question = str;
    },
    clearCacul(state) {
      state.question = "";
      state.result = "";
    },
    totalCacul(state) {
      if (state.question !== "") {
        let ans = "";
        try {
          // eslint-disable-next-line no-eval
          ans = eval(state.question);
        } catch (err) {
          state.result = "Math Error";
        }
        if (ans === undefined) {
          state.result = "Math Error";
        } else {
          state.result = ans;
        }
      }
      let result = state.question + "=" + state.result;
      state.historyCacul.push({ id: nanoid(), result: result });
    },
    defaultCacul(state, action) {
      state.question += action.payload;
    },
  },
});

// Reducer
const caculReducer = caculSlice.reducer;

// Selector
export const caculSelector = (state) => state.caculReducer.question;
export const resultSelector = (state) => state.caculReducer.result;
export const historySelector = (state) => state.caculReducer.historyCacul;
// Action
export const { deleteCacul, clearCacul, totalCacul, defaultCacul, history } =
  caculSlice.actions;

export default caculReducer;
