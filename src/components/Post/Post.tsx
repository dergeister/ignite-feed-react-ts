import { useForm, SubmitHandler } from 'react-hook-form';

import { useState } from 'react';

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { IComment } from '../../types/Comment.interface';
import { ICommentFormData } from '../../types/CommentFormData.interface';
import { IPostProps } from '../../types/PostProps.interface';

const defaultComment:IComment = {
  id: 0,
  author: {
    name: "Kommen Thador",
    role: "Commentator",
    avatarUrl: `https://picsum.photos/200`,
  },
  content: '',
  publishedAt: new Date(),
  applauseCount: 0,
};

export function Post(props:IPostProps) {
  const [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState({...defaultComment})

  const publishedAtTitle = format(props.publishedAt, "d 'de' LLLL 'às'  HH:mm'h'", {locale:ptBR});
  const publishedAtDateTime = props.publishedAt.toISOString();
  const publishedAtElapsedTime = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ICommentFormData>();
  const onSubmit: SubmitHandler<ICommentFormData> = data => {
    const comment = {...newComment};

    comment.id = props.comments.length + 1;
    comment.publishedAt = new Date();
    comment.content = data.content;

    setComments([...comments, comment]);

    setNewComment(defaultComment);

    setValue("content", "");
  };

  function deleteComment(commentId: number) {
    const newComments = comments.filter(comment => comment.id != commentId);
    setComments(newComments);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time title={publishedAtTitle} dateTime={publishedAtDateTime}>
          {publishedAtElapsedTime}
        </time>
      </header>
      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          placeholder='Escreva um Comentário'
          className={styles.comment}
          {...register("content", {required: true})}
        />
        {errors?.content?.type === "required" && <p className="formError">Escreva um comentário.</p>}
        <div className={styles.submitWrapper}>
          <button type="submit" className="submit">
            Publicar
          </button>
        </div>
      </form>
      <div className='commentList'>
        {
          comments.map(comment => {
            return (
              <Comment
                key={`comment-${comment.id}`}
                id={comment.id}
                author={comment.author}
                content={comment.content}
                publishedAt={comment.publishedAt}
                applauseCount={comment.applauseCount}
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  )
}