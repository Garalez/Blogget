import style from './List.module.css';
import Post from './Post';
import {postsContext} from '../../../context/postsContext';
import {useContext} from 'react';

export const List = () => {
  const {list} = useContext(postsContext);
  console.log('list: ', list);

  return (
    <ul className={style.list}>
      {list.map((postData, index) => (
        <Post key={index} postData={postData} />
      ))}
    </ul>
  );
};
