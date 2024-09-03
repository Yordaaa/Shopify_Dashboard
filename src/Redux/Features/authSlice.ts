import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userTypeProps } from "./types";

const initialState: userTypeProps | null = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<userTypeProps>) => {
      state = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    clearCredentials: (state) => {
      state = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, clearCredentials } = userSlice.actions;

export default userSlice.reducer;
