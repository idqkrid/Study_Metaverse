import style from '../public/styles/Login.module.css';

export default function Input({ type, placeholder }) {
  return <input className={style.StyledInput} type={type} placeholder={placeholder} />
}

