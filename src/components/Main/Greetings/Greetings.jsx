import style from './Greetings.module.css';

export const Greetings = () => (
  <div className={style.wrapper}>
    <h2 className={style.title}>Стартовая страница</h2>
    <p className={style.subtitle}>Добро пожаловать!</p>
    <p className={style.text}>Выберите категорию</p>
  </div>
);

