/* eslint-disable max-len */
import {useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import {Preloader} from '../../../UI/Preloader';
import {Notification} from './Notification/Notification';

export const Auth = () => {
  const [exitButton, setExitButton] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const getOut = () => {
    setExitButton(!exitButton);
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Preloader size={50} />
      ) : auth.name ? (
        <button className={style.btn} onClick={getOut}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}
          />
          <Text>{auth.name}</Text>
        </button>
      ) : (
        <>
          <Notification />
          <Text className={style.authLink} As='a' href={urlAuth}>
            <LoginIcon className={style.svg} />
          </Text>
        </>
      )}
      {exitButton && (
        <button
          className={style.logout}
          onClick={() => {
            dispatch(deleteToken());
            clearAuth();
            getOut();
          }}
        >
          Выйти
        </button>
      )}
    </div>
  );
};
