import { IUser } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/AuthResponse";
import {API_URL} from "../http/index"

export default class UserStore {
  user = {} as IUser;
  isAuth = false;
  isLoadind = false; 

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoadind = bool
  }

  async login(email: string, password: string) {
    try {
      console.log(email, password);
      const response = await AuthService.login(email, password);
      console.log(response)

      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);

      console.log(response);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async registration(email: string, name: string, birthDate: string, password: string) {
    try {
      // console.log(email, name, birthDate, password);
      // return
      const response = await AuthService.registration(email, name, birthDate, password);
      console.log(response)
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);

      console.log(response);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token")
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  }

  async checkAuth() {
    try {
      this.setLoading(true)
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
      console.log(response)
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e:any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false)
    }
  }
}
