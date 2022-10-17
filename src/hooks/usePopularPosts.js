/* eslint-disable max-len */
import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const usePopularPosts = () => {
  const {token} = useContext(tokenContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({data}) => {
        setList([...data.children]);
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

  return [list];
};
