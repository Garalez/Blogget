/* eslint-disable max-len */
import {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';


export const Auth = ({delToken, auth}) => {
  const [exitButton, setExitButton] = useState(false);

  return (
    <div className={style.container}>
      {auth.name ? (
        <button
          className={style.btn}
          onClick={() => (exitButton ? setExitButton(false) : setExitButton(true))}
        >
          <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
        </button>
        ) :
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      }
      {exitButton ? (
          <button
            className={style.logout}
            onClick={() => {
              location.href = '/';
              delToken(true);
            }}
          >
          Выйти
          </button>) : null}
    </div>
  );
};

Auth.propTypes = {
  delToken: PropTypes.func,
  auth: PropTypes.object,
};
