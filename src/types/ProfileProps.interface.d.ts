import { IUser } from "./User.interface";

export interface IProfileProps {
  user: IUser;
  onUpdateProfile: (user: IUser) => void;
}