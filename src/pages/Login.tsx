import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IUserFormData } from '../types/UserFormData.interface';
import { ILoginProps } from '../types/LoginProps.interface';

import styles from './Login.module.css';

export function Login(props: ILoginProps) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<IUserFormData>();
  const onSubmit: SubmitHandler<IUserFormData> = data => {
    props.onLogin({
      name: data.userName,
      role: data.role,
      avatarUrl: '/src/assets/github.png'
    });
    
    navigate('/feed');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <h3>Olá Visitante!</h3>
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
        <button type="submit" className="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}