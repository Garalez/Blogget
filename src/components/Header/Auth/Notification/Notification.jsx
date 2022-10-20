import style from './Notification.module.css';
import ReactDOM from 'react-dom';

export const Notification = () =>
  ReactDOM.createPortal(
    <div className={style.wrapper}>
      <div className={style.icon}></div>
      <div className={style.notify}>Ошибка получения данных пользователя!</div>
    </div>,
    document.getElementById('notification-root')
  );
