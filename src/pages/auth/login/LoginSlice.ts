import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isRight, right } from "fp-ts/lib/Either";
import AuthError from "../../../networking/auth/AuthError";
import { StoreExtraArg } from "../../../state/Dependencies";
import { CurrentUser } from "../../user/UserSlice";

export type LogInRequest = {
  email: string;
  password: string;
};

export type LogInResponse = {
  accessToken: string;
  refreshToken: string;
  expiryRefreshToken: number;
  user: CurrentUser;
};

type ThunkApi = {
  rejectValue: AuthError;
  extra: StoreExtraArg;
};

export interface LoginState {
  isAuth: boolean;
  data: LogInResponse | null;
  isLoading: boolean;
  error: AuthError | null;
}

const initialState: LoginState = {
  isAuth: false,
  data: null,
  isLoading: false,
  error: null,
};

const logInWithEmailAndPassword = createAsyncThunk<any, LogInRequest, ThunkApi>(
  "auth/loginEmailAndPassword",
  async (loginRequest, thunkAPI) => {
    const result = await thunkAPI.extra.authRepo.logInWithEmailAndPassword(
      loginRequest
    );
    if (isRight(result)) {
      return right(result.right);
    }
    return thunkAPI.rejectWithValue(result.left);
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logInWithEmailAndPassword.pending, (state) => {})
      .addCase(logInWithEmailAndPassword.fulfilled, (state, action) => {})
      .addCase(logInWithEmailAndPassword.rejected, (state, action) => {});
  },
});
