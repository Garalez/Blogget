import {watchPosts} from './postsData/postsDataSaga';
// import {watchSearch} from './search/searchSaga';

export default function* rootSaga() {
  yield watchPosts();
  // yield watchSearch();
}
