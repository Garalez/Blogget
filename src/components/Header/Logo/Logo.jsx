import style from './Logo.module.css';
import {ReactComponent as LogoIcon} from './img/logo.svg';

export const Logo = () => (
  <a className={style.link} href='/'>
    <LogoIcon width={30} height={30} alt='Логотип Blogget' />
  </a>
);
