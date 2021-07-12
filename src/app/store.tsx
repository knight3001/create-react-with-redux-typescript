import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import monitorReducerEnhancer from "./monitorReducer";
import loggerMiddleware from "./loggerMiddleware";
import rtkQueryErrorLogger from "./rtkQueryErrorLogger";
import rootReducer from "./reducers";
import { pokemonApi } from "../services/pokemon";

const token = localStorage.getItem("jwt");

function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            jwt: token || "",
          },
        },
      })
        .concat(loggerMiddleware)
        .concat(rtkQueryErrorLogger)
        .concat(pokemonApi.middleware),
    // preloadedState,
    enhancers: [monitorReducerEnhancer],
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}

const store = configureAppStore();

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
