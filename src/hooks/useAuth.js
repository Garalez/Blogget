/* eslint-disable max-len */
import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useDispatch} from 'react-redux';
import {getToken} from '../api/token';
import {deleteToken} from '../store';

export const useAuth = () => {
  const token = getToken();
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => (response.status === 401 ? dispatch(deleteToken()) : response.json()))
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
