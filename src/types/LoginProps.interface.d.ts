import { IUser } from "./User.interface";

export interface ILoginProps {
  onLogin: (user:IUser) => void;
}
