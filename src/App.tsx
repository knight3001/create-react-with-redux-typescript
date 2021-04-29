import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter/Counter";
import UsersList from "./features/users/UsersList";
import LoadTodos from "./features/todo/LoadTodos";
import ReactHookForm from "./features/forms/ReactHookForm";
import ReactFormik from "./features/forms/Formik";
import TypedForm from "./features/forms/TypedForm";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <UsersList />
      <LoadTodos />
      <ReactHookForm />
      <ReactFormik />
      <TypedForm />
    </Provider>
  );
}

export default App;
