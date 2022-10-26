/* eslint-disable max-len */
import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {postsSlice} from './postsDataSlice';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState, dispatch}) => {
    let page = getState().posts.page;

    if (newPage) {
      page = newPage;
      dispatch(postsSlice.actions.changePage(page));
    }

    const token = getState().token.token;
    const after = getState().posts.after;
    const loading = getState().posts.status;
    const isLast = getState().posts.isLast;

    if (!token || loading === 'loading' || loading === 'error' || isLast) return;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
      .then(({data}) => {
        if (after) {
          return dispatch(postsSlice.actions.postsRequestSuccessAfter({after: data.data.after, posts: data.data.children}));
        } else {
          return dispatch(postsSlice.actions.postsRequestSuccess({after: data.data.after, posts: data.data.children}));
        }
      })
      .catch((error) => ({error}));
  }
);
