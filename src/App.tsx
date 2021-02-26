import React from "react";
import store from "./app/store";
import { Provider } from "react-redux";
import Counter from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
