import { IComment } from "./Comment.interface";
import { IUser } from "./User.interface";

export interface IPostProps {
  publishedAt: Date;
  author: IUser;
  content: string;
  comments: IComment[];
}