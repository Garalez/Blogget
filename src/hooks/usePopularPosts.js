/* eslint-disable max-len */
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/postsData/postsDataAction';

export const usePopularPosts = () => {
  const token = useSelector((state) => state.token.token);
  const list = useSelector((state) => state.posts.data);
  const status = useSelector((state) => state.posts.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [list, status];
};
