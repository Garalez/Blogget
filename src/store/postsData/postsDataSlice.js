import {createSlice} from '@reduxjs/toolkit';

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
    postsRequest: (state) => {
      console.log(state);
      state.error = '';
      state.status = 'loading';
    },
    postsRequestSuccess: (state, action) => {
      console.log('suc', state, action);
      state.status = 'loaded';
      state.posts = action.payload.posts;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postsRequestError: (state, action) => {
      console.log('err', state, action);
      state.status = 'error';
      state.error = action.error;
    },
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
  },
  extraReducers: {},
});

export default postsSlice.reducer;
