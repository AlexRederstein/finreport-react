import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Context } from "./context/UserContext";
import UserStore from "./store/UserStore";

const store = new UserStore();

createRoot(document.querySelector("body") as HTMLElement).render(
  <Context.Provider value={store}>
    <App />
  </Context.Provider>,
);
