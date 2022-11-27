import { IUser } from "./User.interface";

export interface ISidebarProps {
  user: IUser;
  onLogout: () => void;
}