import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AppError } from "../../common/types/Types";

export interface UserState {
  currentUser?: CurrentUser;
  isLoading: boolean;
  error: AppError;
}

export interface CurrentUser {
  email: string;
  shortId: string;
  name: string;
  photo_url: string;
}

const initialState: UserState = {
  currentUser: {
    shortId: "",
    name: "",
    email: "",
    photo_url: "",
  },
  isLoading: false,
  error: { message: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer comes here
  },
  extraReducers: {
    // Extra reducer comes here
  },
});
export const userSelector = (state: { user: any }) => state.user;
