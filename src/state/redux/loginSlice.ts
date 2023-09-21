import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/provider/store";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export const selectLogin = (state: RootState) => state.login.value;

export const loginReducer = loginSlice.reducer;
