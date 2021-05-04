import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import PageRoute from "./app/navs/PageRoute";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PageRoute />
    </Provider>
  );
}

export default App;
