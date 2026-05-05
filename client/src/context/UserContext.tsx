import { createContext } from "react";
import UserStore from "../store/UserStore";

const Auth = new UserStore();

export const Context = createContext<UserStore>(Auth);
