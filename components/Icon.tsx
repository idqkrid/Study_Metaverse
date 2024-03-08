import style from '../public/styles/Login.module.css';

export default function Icon({ color, children }) {
  return <div className={style.login_icon} style={{ background: color }}>{children}</div>;
}