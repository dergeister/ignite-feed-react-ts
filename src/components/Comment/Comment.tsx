import { Trash, HandsClapping } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Comment.module.css'
import { useState } from 'react';
import { ICommentProps } from '../../types/CommentProps.interface';

export function Comment(props:ICommentProps) {
  const publishedAtTitle = format(props.publishedAt, "d 'de' LLLL 'às'  HH:mm'h'", {locale: ptBR});
  const publishedAtDateTime = props.publishedAt.toISOString();
  const publishedAtElapsedTime = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [applauseCount, setApplauseCount] = useState(props.applauseCount)

  function handleDeleteComment() {
    props.onDeleteComment(props.id);
  }

  function handleApplaud() {
    setApplauseCount((state => {
      return state + 1;
    }));
  }

  return (
    <div className={styles.comment}>
      <Avatar src={props.author.avatarUrl} borderless />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.commentHeader}>
            <div className={styles.authorAndTime}>
              <strong>{props.author.name}</strong>
              <time title={publishedAtTitle} dateTime={publishedAtDateTime}>
                {publishedAtElapsedTime}
              </time>
            </div>
            <button
              title='Deletar Comentário'
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </div>
          <p className={styles.contentText}>
            {props.content}
          </p>
        </div>
        <div className={styles.applauseWrapper}>
          <button onClick={handleApplaud}>
            <HandsClapping />
            Aplaudir <span>{applauseCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}