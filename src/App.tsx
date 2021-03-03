import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter/Counter";
import UsersList from "./features/users/UsersList";
import LoadTodos from "./features/todo/LoadTodos";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <UsersList />
      <LoadTodos />
    </Provider>
  );
}

export default App;
