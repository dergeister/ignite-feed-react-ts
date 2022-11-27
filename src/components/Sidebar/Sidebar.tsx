import { useNavigate } from 'react-router-dom';
import { PencilLine, SignOut } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar';
import { ISidebarProps } from '../../types/SidebarProps.interface';

import styles from './Sidebar.module.css'

export function Sidebar(props: ISidebarProps) {
  const navigate = useNavigate();

  function handleEditProfile() {
    navigate('/profile');
  }

  function handleLogout() {
    props.onLogout();
    
    navigate('/');
  }

  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        className={styles.cover}
      /> 
      <div className={styles.profile}>
        <Avatar src={props.user.avatarUrl} />
        <strong>{props.user.name}</strong>
        <span>{props.user.role}</span>
        <footer>
          <button className={styles.editProfile} onClick={handleEditProfile}>
            <PencilLine size={20} />
            Editar Seu Perfil
          </button>
          <button className={styles.logout} onClick={handleLogout}>
            <SignOut size={16} />
            Sair
          </button>
        </footer>
      </div>
    </aside>
  );
}