import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { isRight } from "fp-ts/lib/Either";
import AuthError from "../../../networking/auth/AuthError";
import { StoreExtraArg } from "../../../state/Dependencies";

export type SignUpRequest = {
  name: string;
  password: string;
  email: string;
};

export type SignUpResponse = {
  statusText: string;
  statusCode: number;
};

type ThunkApi = {
  rejectValue: AuthError;
  extra: StoreExtraArg;
};

export type SignUpState = {
  data: SignUpResponse | null;
  isLoading: boolean;
  error: AuthError | null;
};

const initialState: SignUpState = {
  data: null,
  isLoading: false,
  error: null,
};

const signUpWithEmailAndPassword = createAsyncThunk<
  SignUpResponse,
  SignUpRequest,
  ThunkApi
>("auth/signUpEmailAndPassword", async (signUpRequest, thunkAPI) => {
  const result = await thunkAPI.extra.authRepo.signUpWithEmailAndPassword(
    signUpRequest
  );
  if (isRight(result)) {
    return result.right;
  }
  return thunkAPI.rejectWithValue(result.left);
});

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpWithEmailAndPassword.pending, (state) => {})
      .addCase(signUpWithEmailAndPassword.fulfilled, (state, action) => {})
      .addCase(signUpWithEmailAndPassword.rejected, (state, action) => {});
  },
});

export const signUpAction = { signUpWithEmailAndPassword };
export default signUpSlice.reducer;
