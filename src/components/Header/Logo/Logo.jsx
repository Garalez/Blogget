import style from './Logo.module.css';
import {ReactComponent as LogoIcon} from './img/logo.svg';
import {useNavigate} from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <a
      className={style.link}
      href='/'
      onClick={(e) => {
        e.preventDefault();
        navigate('/');
      }}
    >
      <LogoIcon width={30} height={30} alt='Логотип Blogget' />
    </a>
  );
};
