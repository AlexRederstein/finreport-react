import { Route, Routes } from "react-router-dom";
import Main from "../views/Main";
import Login from "../auth/login";
// import Registration from '../Views/Auth/Registration'
import Registration from "../auth/registration";

export default () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/login" Component={Login} />
      <Route path="/registration" Component={Registration} />
    </Routes>
  );
};
