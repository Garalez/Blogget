import style from './List.module.css';
import Post from './Post';
import {Preloader} from '../../../UI/Preloader';
import {Text} from '../../../UI/Text';
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/postsData/postsDataAction';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const postsData = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const after = useSelector((state) => state.posts.after);
  const isLast = useSelector((state) => state.posts.isLast);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  const [downloadMoreBtn, setDownloadMoreBtn] = useState(false);
  let scrollingDownloadCountdown = 2;

  useEffect(() => {
    dispatch(postsRequestAsync(page));
    setDownloadMoreBtn(false);
    scrollingDownloadCountdown = 2;
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(postsRequestAsync());
          scrollingDownloadCountdown -= 1;
        }
        if (scrollingDownloadCountdown <= 0) {
          setDownloadMoreBtn(true);
          return observer.unobserve(endList.current);
        }
      },
      {
        rootMargin: '100px',
      }
    );

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, downloadMoreBtn]);

  return (
    <>
      <ul className={style.list}>
        {}
        {after === '' & status !== '' ? (
          <Preloader size={200} />
        ) : status === 'error' || status === '' ? (
          <div className={style.downloadWrapper}>
            <Text As='h2' className={style.title}>
              Ошибка
            </Text>
          </div>
        ) : (
          postsData.map(({data}) => <Post key={data.id} postData={data} />)
        )}
        <li ref={endList} className={style.end}>
          {(after !== '') & (status === 'loading') ? (
            <Preloader size={200} />
          ) : downloadMoreBtn & !isLast & (status !== 'error') ? (
            <div className={style.downloadWrapper}>
              <button
                className={style.download}
                onClick={() => dispatch(postsRequestAsync())}
              >
                Загрузить ещё
              </button>
            </div>
          ) : (
            ''
          )}
        </li>
      </ul>
      <Outlet />
    </>
  );
};
