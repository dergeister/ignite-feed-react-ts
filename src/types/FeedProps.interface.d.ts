import { IUser } from "./User.interface";

export interface IFeedProps {
  user: IUser;
  onLogout: () => void;
}