import style from '../public/styles/Login.module.css';

export default function Button({content}) {
  return (
    <div className={style.login_styledButton}>
      {content}
    </div>
  )
}
