import { AuthenticationAPI, IAuthApi } from "../networking/auth";
import IAuthRepository, { AuthRepositoryAPI } from "../networking/auth/AuthRepository";
import createStore from "./Store";


// Instantiate an auth repository with its dependencies
const authApi: IAuthApi = new AuthenticationAPI();
const authRepo: IAuthRepository = new AuthRepositoryAPI(authApi);

// the object that will be injected into the store as extra arg
const storeExtraArg = {
  authRepo,
};
// also export the type of the above object for convenience
export type StoreExtraArg = typeof storeExtraArg;

export const store = createStore(storeExtraArg);
