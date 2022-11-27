import { IUser } from "./User.interface";

export interface ICommentProps {
  id: number;
  author: IUser;
  content: string;
  publishedAt: Date;
  applauseCount: number;
  onDeleteComment: (commentId: number) => void;
}
