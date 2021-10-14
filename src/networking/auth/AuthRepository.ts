import { Either, left, right } from "fp-ts/Either";
import { IAuthApi } from ".";
import { isGenericError } from "../../common/types/Types";
import { LogInRequest, LogInResponse } from "../../pages/auth/login/LoginSlice";
import { SignUpRequest, SignUpResponse } from "../../pages/auth/signup/SignUpSlice";
import AuthError from "./AuthError";

export default interface IAuthRepository {
  signUpWithEmailAndPassword(
    signUpRequest: SignUpRequest
  ): Promise<Either<AuthError, SignUpResponse>>;

  logInWithEmailAndPassword(
    loginRequest: LogInRequest
  ): Promise<Either<AuthError, LogInResponse>>;

  signOut(): Promise<Either<AuthError, null>>;
}

export class AuthRepositoryAPI implements IAuthRepository {
  private _authApi: IAuthApi;

  constructor(authApi: IAuthApi) {
    this._authApi = authApi;
  }

  async signUpWithEmailAndPassword(
    signUpRequest: SignUpRequest
  ): Promise<Either<AuthError, SignUpResponse>> {
    try {
      const response = await this._authApi.signUpWithEmailAndPassword(
        signUpRequest
      );
      return right(response);
    } catch (e: any) {
      if (isGenericError(e)) {
        if (e.code == "invalid_email_or_password")
          return left(AuthError.invalidEmailOrPassword);
      }
      return left(AuthError.general);
    }
  }

  async logInWithEmailAndPassword(
    loginRequest: LogInRequest
  ): Promise<Either<AuthError, LogInResponse>> {
    try {
      const response = await this._authApi.logInWithEmailAndPassword(
        loginRequest
      );
      return right(response);
    } catch (e: any) {
      if (isGenericError(e)) {
        if (e.code == "invalid_email_or_password")
          return left(AuthError.invalidEmailOrPassword);
      }
      return left(AuthError.general);
    }
  }

  async signOut(): Promise<Either<AuthError, null>> {
    return right(null);
  }
}
