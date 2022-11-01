/* eslint-disable max-len */
import axios from 'axios';
import {put, select, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import {postsSlice} from './postsDataSlice';

function* fetchPosts(newPage) {
  let page = yield select((state) => state.posts.page);

  if (newPage.payload) {
    page = newPage;
    // yield put(changePage(page));
  }

  const token = yield select((state) => state.token.token);
  const after = yield select((state) => state.posts.after);
  const loading = yield select((state) => state.posts.status);
  const isLast = yield select((state) => state.posts.isLast);
  const posts = yield select((state) => state.posts.posts);

  if (!token || loading === 'loading' || loading === 'error' || isLast) return;
  console.log('loading: ', loading);

  try {
    console.log('asdasdadsasdasdasd ', page.payload);
    yield axios(
      `${URL_API}/${page.payload}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    ).then(({data}) => {
      if (after) {
        console.log('data1: ', data);
        put(
          postsSlice.actions.postsRequestSuccess({
            after: data.data.after,
            posts: [...posts, ...data.data.children],
          })
        );
      } else {
        console.log('data2: ', data);
        console.log(postsSlice.actions.postsRequestSuccess());
        put(
          postsSlice.actions.postsRequestSuccess({
            after: data.data.after,
            posts: data.data.children,
          })
        );
      }
    });
  } catch (error) {
    console.log('qweqweqweqweqewqweqweqweqwe');
    put(postsSlice.actions.postsRequestError(error));
  }
}

export function* watchPosts() {
  yield takeLatest(
    [postsSlice.actions.postsRequest.type, postsSlice.actions.changePage.type],
    fetchPosts
  );
}
