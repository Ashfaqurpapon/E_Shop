import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TCarUser } from "../../types/CarTypes";

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | object;
  token: null | string;
  carUser: null | TCarUser;
};

const initialState: TAuthState = {
  user: null,
  token: null,
  carUser: null,
};

const carAuthSlice = createSlice({
  name: "carAuth",
  initialState,
  reducers: {
    setCarUser: (state, action) => {
      const { user, token, carUser } = action.payload;
      state.user = user;
      state.token = token;
      state.carUser = carUser;
    },
    carUserlogout: (state) => {
      state.user = null;
      state.token = null;
      state.carUser = null;
    },
  },
});

export const { setCarUser, carUserlogout } = carAuthSlice.actions;

export default carAuthSlice.reducer;
export const useCurrentToken = (state: RootState) => state.carAuth.token;
export const selectCurrentUser = (state: RootState) => state.carAuth.user;
export const selectCarUser = (state: RootState) => state.carAuth.carUser;
