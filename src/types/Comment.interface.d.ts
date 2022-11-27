import { IUser } from "./User.interface";

export interface IComment {
  id: number;
  author: IUser;
  content: string;
  publishedAt: Date;
  applauseCount: number;
}