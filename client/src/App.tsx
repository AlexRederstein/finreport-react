import Header from "./components/layouts/Header";
import SideBar from "./components/layouts/Sidebar";
import Main from "./components/layouts/Main";
import Login from "./components/auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import List from "./components/documents/List";
import React, { useEffect } from "react";
import { AuthorizedRoutes, UnauthorizedRoutes } from "./middleware/AuthRoutes";
import { observer } from "mobx-react";
import { useContext } from "react";
import { Context } from "./context/UserContext";

const App: React.FC = () => {
  const store = useContext(Context);

  return (
    <>
      <BrowserRouter>
        <Header />
        {store.isAuth ? <SideBar /> : false}
        <Main>
          <Routes>
            <Route element={<UnauthorizedRoutes />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<AuthorizedRoutes />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/documents/:id" element={<List />} />
            </Route>
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
};

export default observer(App);
