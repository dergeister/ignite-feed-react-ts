import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../components/Avatar/Avatar';
import { IProfileProps } from '../types/ProfileProps.interface';
import { IUserFormData } from '../types/UserFormData.interface';

import styles from './Profile.module.css';

export function Profile(props: IProfileProps) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IUserFormData>();
  const onSubmit: SubmitHandler<IUserFormData> = data => {
    props.onUpdateProfile({
      name: data.userName,
      role: data.role,
      avatarUrl: '/src/assets/github.png'
    });
    
    navigate('/feed');
  };

  setValue("userName", props.user.name);
  setValue("role", props.user.role);

  function handleReturn() {
    navigate('/feed');
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.profileForm}>
        <img
          src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
          className={styles.cover}
        /> 
        <h3>Atualize seu Perfil</h3>
        <div className={styles.userWrapper}>
          <div className={styles.userAvatar}>
            <Avatar src={props.user.avatarUrl} />
          </div>
          <div className={styles.userData}>
            <label htmlFor="userName">
              <span>Nome</span>
              <input
                type="text"
                placeholder="Vizhy Tanthe"
                {...register("userName", {required: true})}
              />
              {errors?.userName?.type === "required" && <p className="formError">Informe seu nome.</p>}
            </label>
            <label htmlFor="role">
              <span>Cargo/Função</span>
              <input
                type="text"
                placeholder="Visitante"
                {...register("role", {required: true})}
              />
              {errors?.role?.type === "required" && <p className="formError">Informe seu cargo/função.</p>}
            </label>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.returnButton} onClick={handleReturn}>
            Voltar
          </button>
          <button type="submit" className="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}