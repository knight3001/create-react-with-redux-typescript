import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import PokemonTrail from "../../features/rtkTrail/PokemonTrail";

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
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/todos" element={<LoadTodos />} />
        <Route path="/forms" element={<FormPage />} />
        <Route path="/hoc" element={<HocPage />} />
        <Route path="/calendar" element={<FullCalendarDemo />} />
        <Route path="/rtkquery" element={<RTCPage />} />
        <Route path="/rtkmutation" element={<PostsManager />} />
        <Route path="/rtkmutation/:id" element={<PostDetail />} />
        <Route path="/rtktrail" element={<PokemonTrail />} />
        {/* <Redirect to="/counter" /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default PageRoute;
