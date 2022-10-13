import style from './Header.module.css';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';

export const Header = ({delToken, auth}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo/>
        <Heading text='Главная' />
        <Search/>
        <Auth delToken={delToken} auth={auth} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  delToken: PropTypes.func,
  auth: PropTypes.object,
};
