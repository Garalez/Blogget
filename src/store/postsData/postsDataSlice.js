import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsDataAction';

const initialState = {
  status: '',
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsRequestSuccessAfter: (state, action) => {
      state.status = 'loaded';
      state.posts = [...state.posts, ...action.payload.posts];
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.posts = action.payload.posts;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default postsSlice.reducer;
