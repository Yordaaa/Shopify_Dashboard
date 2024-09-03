import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResponseProps } from "./types";

const initialState: UserResponseProps | null = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserResponseProps>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    clearCredentials: (state) => {
      state?.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, clearCredentials } = userSlice.actions;

export default userSlice.reducer;
