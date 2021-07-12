import React from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Template from "./Template";
import Counter from "../../features/counter/Counter";
import UsersList from "../../features/users/UsersList";
import LoadTodos from "../../features/todo/LoadTodos";
import ReactHookForm from "../../features/forms/ReactHookForm";
import ReactFormik from "../../features/forms/Formik";
import TypedForm from "../../features/forms/TypedForm";
import VitualTree from "../../features/forms/VirtualTree";
import Transform from "../../features/forms/Transform";
import Repositories from "../../features/hoc/Repositories";
import RepositoriesHooks from "../../features/hoc/RepositoriesHooks";
import FullCalendarDemo from "../../features/calendars/FullCalendar";
import RTKBaseSample from "../../features/rtkquery/RTKBaseSample";
import WrappedComponent from "../../features/hoc/WrappedComponent";
import PostsList from "../../features/rtkquery/PokemonList";
import PostsManager from "../../features/posts/PostManager";
import PostDetail from "../../features/posts/PostDetail";

const FormPage = () => (
  <>
    <ReactHookForm />
    <ReactFormik />
    <TypedForm />
    <VitualTree />
    <Transform />
  </>
);

const HocPage = () => (
  <>
    <Repositories />
    <RepositoriesHooks />
    <WrappedComponent />
  </>
);

const RTCPage = () => (
  <>
    <RTKBaseSample />
    <PostsList />
  </>
);

const PageRoute = () => (
  <BrowserRouter basename="">
    <Template>
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/users" component={UsersList} />
        <Route path="/todos" component={LoadTodos} />
        <Route path="/forms" component={FormPage} />
        <Route path="/hoc" component={HocPage} />
        <Route path="/calendar" component={FullCalendarDemo} />
        <Route path="/rtkquery" component={RTCPage} />
        <Route path="/rtkmutation" component={PostsManager} />
        <Route path="/rtkmutation/:id" component={PostDetail} />
        {/* <Redirect to="/counter" /> */}
      </Switch>
    </Template>
  </BrowserRouter>
);

export default PageRoute;
