import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "..";

type UserState = {
  modal: boolean;
};

const initialState: UserState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    },
  },
});

const selectUser = (state: AppState) => state.user;
const userSelectors = {
  user: selectUser,
};

// export { actions, selectors, reducer }
export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
export { userSelectors };
