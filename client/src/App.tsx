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
import Form from "./components/documents/Form"
import Registration from "./components/auth/Registration";

import "./documents/index"

const App: React.FC = () => {
  const store = useContext(Context);

  useEffect(() => {
    if(localStorage.getItem("token")) {
      store.checkAuth()
    }
  }, [])

  if(store.isLoadind) {
    return <div>Загрузка...</div>
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="content-view">
        {store.isAuth ? <SideBar /> : false}
          <Main>
            <Routes>
              <Route element={<UnauthorizedRoutes />}>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
              </Route>
              <Route element={<AuthorizedRoutes />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/documents/:id" element={<List />} />
                <Route path="/documents/create/:id" element={<Form />}></Route>
              </Route>
            </Routes>
          </Main>
        </div>
      </BrowserRouter>
    </>
  );
};


export default observer(App);
