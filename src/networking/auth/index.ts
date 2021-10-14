import axios from "axios";
import { baseURLLocal } from "../config/BaseURL";
import {
  SignUpRequest,
  SignUpResponse,
} from "../../pages/auth/signup/SignUpSlice";
import { LogInRequest, LogInResponse } from "../../pages/auth/login/LoginSlice";

export interface IAuthApi {
  signUpWithEmailAndPassword(
    signUpRequest: SignUpRequest
  ): Promise<SignUpResponse>;

  logInWithEmailAndPassword(loginRequest: LogInRequest): Promise<LogInResponse>;
}

export class AuthenticationAPI implements IAuthApi {
  async signUpWithEmailAndPassword({
    name,
    email,
    password,
  }: SignUpRequest): Promise<SignUpResponse> {
    console.log("Email and Password SignUp", name);
    try {
      const response = await axios({
        method: "POST",
        url: `${baseURLLocal}/auth/register/add/user`,
        data: {
          name: name,
          email: email,
          password: password,
        },
      });

      return response.data;
    } catch (e: any) {
      console.error("Error adding document: ", e);
      return e;
    }
  }

  async logInWithEmailAndPassword({
    email,
    password,
  }: LogInRequest): Promise<LogInResponse> {
    console.log("Email and Password Auth", email);
    try {
      const response = await axios({
        method: "POST",
        url: `${baseURLLocal}/auth/login/user`,
        data: {
          email: email,
          password: password,
        },
      });

      return response.data;
    } catch (e: any) {
      console.error("Error adding document: ", e);
      return e;
    }
  }
}
