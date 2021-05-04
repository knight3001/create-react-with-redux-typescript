import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter/Counter";
import UsersList from "./features/users/UsersList";
import LoadTodos from "./features/todo/LoadTodos";
import ReactHookForm from "./features/forms/ReactHookForm";
import ReactFormik from "./features/forms/Formik";
import TypedForm from "./features/forms/TypedForm";
import VitualTree from "./features/forms/VirtualTree";
import Transform from "./features/forms/Transform";
import Repositories from "./features/hoc/Repositories";
import RepositoriesHooks from "./features/hoc/RepositoriesHooks";
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
      <Transform />
      <VitualTree />
      <Repositories />
      <RepositoriesHooks />
    </Provider>
  );
}

export default App;
