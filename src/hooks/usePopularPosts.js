/* eslint-disable max-len */
import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {getToken} from '../api/token';
import {formatPostsData} from '../utils/formatPostsData';

export const usePopularPosts = () => {
  const token = getToken();
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
        setList(formatPostsData(data.children));
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

  return [list];
};
