import style from './IncorrectRoute.module.css';

export const IncorrectRoute = () => {
  console.log(style);
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Ошибка! Такой страницы не существует</h2>
    </div>
  );
};
