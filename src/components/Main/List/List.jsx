import {usePopularPosts} from '../../../hooks/usePopularPosts';
import style from './List.module.css';
import Post from './Post';
import {Preloader} from '../../../UI/Preloader';
import {Text} from '../../../UI/Text';

export const List = () => {
  const [list, status] = usePopularPosts();

  return (
    <>
      {status === 'loading' && <Preloader size={200} />}
      {status === 'error' && (
        <Text As='h2' className={style.title}>
          Ошибка
        </Text>
      )}
      {status === 'loaded' && (
        <ul className={style.list}>
          {list.map((postData, index) => (
            <Post key={index} postData={postData.data} />
          ))}
        </ul>
      )}
    </>
  );
};
