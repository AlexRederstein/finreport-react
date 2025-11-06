import { IUser } from "../IUser";

export default interface AxiosResponse {
  accesToken: string;
  refreshToken: string;
  user: IUser;
  email: string;
}
