import { configureStore } from "@reduxjs/toolkit";
import { StoreExtraArg } from "./Dependencies";
import rootReducer from "./RootReducer";

// Add a parameter of type StoreExtraArg
const createStore = (extraArg: StoreExtraArg) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
        // serializableCheck: false,
      }),
  });
};

export default createStore;

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];