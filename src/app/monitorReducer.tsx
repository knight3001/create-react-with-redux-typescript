// @ts-nocheck
import { PreloadedState, Action } from "@reduxjs/toolkit";
import {
  Reducer,
  StoreEnhancerStoreCreator,
  StoreEnhancer,
  DeepPartial,
  AnyAction,
  Store,
} from "redux";
import type { RootState } from "./store";

const round = (number: number) => Math.round(number * 100) / 100;

const monitorReducerEnhancer: StoreEnhancer = (
  createStore: StoreEnhancerStoreCreator
) => (
  reducer: Reducer,
  initialState: DeepPartial<RootState>,
  enhancer: StoreEnhancer
) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = round(end - start);

    console.log("reducer process time:", diff);

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

export default monitorReducerEnhancer;
