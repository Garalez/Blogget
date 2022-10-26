import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsDataAction';

const initialState = {
  status: '',
  post: {},
  comments: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default commentsSlice.reducer;
