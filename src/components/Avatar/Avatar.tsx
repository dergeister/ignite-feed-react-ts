import { IAvatarProps } from '../../types/AvatarProps.interface';

import styles from './Avatar.module.css'

export function Avatar(props:IAvatarProps) {
  return (
    <img
      className={props.borderless ? styles.borderlessAvatar : styles.avatar}
      src={props.src}
    />
  );
}