/* eslint-disable max-len */
import {useState, useContext} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';


export const Auth = () => {
  const dispatch = useDispatch();
  const [exitButton, setExitButton] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

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
      {exitButton && (
        <button
          className={style.logout}
          onClick={() => {
            dispatch(deleteToken());
            location.href = '/';
            clearAuth();
          }}
        >
        Выйти
        </button>)}
    </div>
  );
};
